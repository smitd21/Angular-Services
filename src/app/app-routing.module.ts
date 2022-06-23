import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './MyComponents/homepage/homepage.component';
import { EmployeeListComponent } from './MyComponents/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './MyComponents/employee-details/employee-details.component';
import { PageNotFoundComponent } from './MyComponents/page-not-found/page-not-found.component';
import { EmpDepartmentsComponent } from './MyComponents/emp-departments/emp-departments.component';
import { EmpDepartmentDetailComponent } from './MyComponents/emp-department-detail/emp-department-detail.component';

const routes: Routes = [
  // { path: '', component: HomepageComponent },
  { path: '', redirectTo: '/employee-list', pathMatch: 'full' },
  // { path: '', redirectTo: '/employee-list', pathMatch: 'prefix' },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'employee-details', component: EmployeeDetailsComponent },
  { path: 'employee-departments', component: EmpDepartmentsComponent },

  { path: 'employee-dept-detail/:id', component: EmpDepartmentDetailComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
