import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTaskManagementComponent } from './admin-task-management.component';

describe('AdminTaskManagementComponent', () => {
  let component: AdminTaskManagementComponent;
  let fixture: ComponentFixture<AdminTaskManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTaskManagementComponent]
    });
    fixture = TestBed.createComponent(AdminTaskManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
