import { Employee } from './../shared/employee.model';
import { EmployeeService } from './../shared/employee.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms/forms";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.employeeService.selectedEmployee = {
      EmployeeID: null,
      FirstName: "",
      LastName: "",
      EmpCode: "",
      Position: "",
      Office: ""
    };
  }

  onSubmit(form: NgForm){
    this.employeeService.postEmployee(form.value)
        .subscribe( data => {
          this.resetForm(form);
        })
  }
}
