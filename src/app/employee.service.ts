import { Injectable } from '@angular/core';

//! WE SEE THIS INJECTABLE ALREADY WHEN .service file is made

//! Used when this service might itself have an injected dependencies
//! i.e If You ever want to inject a service into another service Injectable decorator is  MUST used
// (Components have @Component decorator and not this @Injectable decorator (only in .service file))

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  getEmployees() {
    return [
      {
        sno: 1,
        name: 'Smit Desai',
        designation: 'SDE',
        number: '992141209',
      },
      {
        sno: 2,
        name: 'John Doe',
        designation: 'SDE',
        number: '99412021',
      },
      {
        sno: 3,
        name: 'Matt Blanc',
        designation: 'SDE',
        number: '9941609',
      },
    ];
  }
}
