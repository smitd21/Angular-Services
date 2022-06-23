import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../departments.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-emp-departments',
  templateUrl: './emp-departments.component.html',
  styleUrls: ['./emp-departments.component.css'],
})
export class EmpDepartmentsComponent implements OnInit {
  public departments = [];
  constructor(
    private _empDepartments: DepartmentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.departments = this._empDepartments.getDepartments();
  }
  onSelect(departmentId) {
    this.router.navigate(['/employee-dept-detail', departmentId]);
  }
}
