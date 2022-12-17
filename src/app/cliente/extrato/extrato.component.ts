import { ChangeDetectorRef, Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateAdapter, NgbDateParserFormatter, NgbDatepicker, NgbDateStruct, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { RegistroExtrato } from 'src/app/shared/models/registro-extrato/registro-extrato.model';
import { ClienteService } from '../services';


@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {
  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      const date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10),
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date ? (date.day < 10 ? "0" + date.day : date.day) + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
  }
}


@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css'],

  providers: [

		{ provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
	],
})

export class ExtratoComponent implements OnInit {
  ngOnInit(): void {
    this.extratos = this.listarExtratosPorData( this.calendar.getNext(this.calendar.getToday(), 'd', -10), this.calendar.getToday())
  }
  @ViewChild('datepicker') ngbDatepicker: NgbInputDatepicker | null;

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null;
  toDate: NgbDate | null;
  today: NgbDate = this.calendar.getToday();
  extratos: RegistroExtrato[] = [];

  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter, public clienteService: ClienteService, private changeDetection: ChangeDetectorRef) {
    this.fromDate = null;
    this.ngbDatepicker = null;
    this.toDate = null;
    this.today = this.calendar.getToday();
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.ngbDatepicker?.close();
      this.toDate = date;
      this.extratos = this.listarExtratosPorData(this.fromDate, this.toDate);
      console.log(this.extratos)
      this.changeDetection.detectChanges();

    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }


  listarExtratosPorData(fromDate: NgbDate, toDate: NgbDate): RegistroExtrato[] {
    const dataInicioConvertida: Date = new Date(fromDate.year,fromDate.month - 1, fromDate.day);
    const dataFimConvertida: Date = new Date(toDate.year, toDate.month - 1, toDate.day);
    return this.clienteService.listarExtratosPordata(dataInicioConvertida, dataFimConvertida );
  }

  converteData(timestamp: Date | undefined): string{


    return timestamp != undefined ? timestamp.toLocaleTimeString("pt-Br") : "";
  }
}



