import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/modules/employee.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  employeeForm: FormGroup;
  data: Employee[] = [];

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
      position: ['', Validators.required],
      doj: ['', Validators.required]
    });
  }

  onSubmit() {
    this.data = [this.employeeForm.value as Employee];
    console.log(this.data);
  }

  resetForm() {
    this.employeeForm.reset();
  }

}
