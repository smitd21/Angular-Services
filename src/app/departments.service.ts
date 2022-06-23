import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  constructor() {}
  getDepartments() {
    return [
      {
        id: 1,
        deptName: 'Genesys',
      },
      {
        id: 2,
        deptName: 'Hyperlocal Edge',
      },
      {
        id: 3,
        deptName: 'Interfaces',
      },
      {
        id: 4,
        deptName: 'Devops',
      },
    ];
  }
  // 'Genesys', 'Hyperlocal Edge', 'Interfaces', 'Devops'
}
