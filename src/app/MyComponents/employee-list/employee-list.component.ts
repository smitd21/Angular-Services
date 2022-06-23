import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  public employees = [];
  constructor(private _employeeService: EmployeeService) {
    // Local variable _employeeService stores instance of EmployeeService
  }

  // ngOnInit hook (lifecycle) gets called once the component has been initialised
  ngOnInit(): void {
    // Fetch Employee data
    this.employees = this._employeeService.getEmployees();
  }
}
