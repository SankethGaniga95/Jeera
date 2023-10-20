import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTaskManagementComponent } from './project-task-management.component';

describe('ProjectTaskManagementComponent', () => {
  let component: ProjectTaskManagementComponent;
  let fixture: ComponentFixture<ProjectTaskManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectTaskManagementComponent]
    });
    fixture = TestBed.createComponent(ProjectTaskManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
