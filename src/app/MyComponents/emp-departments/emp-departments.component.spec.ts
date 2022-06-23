import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDepartmentsComponent } from './emp-departments.component';

describe('EmpDepartmentsComponent', () => {
  let component: EmpDepartmentsComponent;
  let fixture: ComponentFixture<EmpDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDepartmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
