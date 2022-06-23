import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDepartmentDetailComponent } from './emp-department-detail.component';

describe('EmpDepartmentDetailComponent', () => {
  let component: EmpDepartmentDetailComponent;
  let fixture: ComponentFixture<EmpDepartmentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDepartmentDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpDepartmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
