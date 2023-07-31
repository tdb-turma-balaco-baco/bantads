import {Component, OnInit} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-editar-gerente',
  templateUrl: './editar-gerente.component.html',
})
export class EditarGerenteComponent implements OnInit {
  managerForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    cpf: ['', [Validators.required]],
    phonenumber: ['', [Validators.required]]
  });
  managerId!: number;
  isUpdate: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.managerId = +this.route.snapshot.params['id'];
    if (this.managerId) {
      this.isUpdate = true;
    }
  }

  save() {
    console.log(this.managerForm.value);
  }

  get name() {
    return this.managerForm.get('name');
  }

  get email() {
    return this.managerForm.get('email');
  }

  get cpf() {
    return this.managerForm.get('cpf');
  }

  get phonenumber() {
    return this.managerForm.get('phonenumber');
  }
}
