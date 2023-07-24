import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-criar-gerente',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './criar-gerente.component.html',
  styleUrls: ['./criar-gerente.component.scss']
})
export class CriarGerenteComponent {
  managerFormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    cpf: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phonenumber: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) {
  }

  get name() {
    return this.managerFormGroup.get('name');
  }

  get cpf() {
    return this.managerFormGroup.get('cpf');
  }

  get email() {
    return this.managerFormGroup.get('email');
  }

  get phonenumber() {
    return this.managerFormGroup.get('phonenumber');
  }
}
