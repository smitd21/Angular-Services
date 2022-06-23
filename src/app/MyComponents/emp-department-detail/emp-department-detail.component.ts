import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../departments.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-emp-department-detail',
  templateUrl: './emp-department-detail.component.html',
  styleUrls: ['./emp-department-detail.component.css'],
})
export class EmpDepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private route: ActivatedRoute) {
    // In local variable route = Storing an instance of ActivatedRoute Service
  }

  ngOnInit(): void {
    this.departmentId = parseInt(this.route.snapshot.paramMap.get('id'));
    //!From the current route snapshot paramMap api help us get the parameter from the url,and for us paramater is the id
  }
}
