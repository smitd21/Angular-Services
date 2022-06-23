import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './MyComponents/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './MyComponents/employee-details/employee-details.component';
import { EmployeeService } from './employee.service';
import { PageNotFoundComponent } from './MyComponents/page-not-found/page-not-found.component';
import { HomepageComponent } from './MyComponents/homepage/homepage.component';
import { DepartmentsService } from './departments.service';
import { EmpDepartmentsComponent } from './MyComponents/emp-departments/emp-departments.component';
import { EmpDepartmentDetailComponent } from './MyComponents/emp-department-detail/emp-department-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    PageNotFoundComponent,
    HomepageComponent,
    EmpDepartmentsComponent,
    EmpDepartmentDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [EmployeeService, DepartmentsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
