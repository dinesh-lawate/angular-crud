import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';

@Injectable()
export class EmployeeService {
  public selectedEmployee: Employee = new Employee();
  constructor(private http: Http) { }

  postEmployee(emp: Employee) {
    var body = JSON.stringify(emp);
    var headers = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headers });
    return this.http.post('http://localhost:51182/api/Employees', body, requestOptions);
  }
}
