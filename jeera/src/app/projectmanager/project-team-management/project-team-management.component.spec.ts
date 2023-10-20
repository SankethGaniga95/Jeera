import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTeamManagementComponent } from './project-team-management.component';

describe('ProjectTeamManagementComponent', () => {
  let component: ProjectTeamManagementComponent;
  let fixture: ComponentFixture<ProjectTeamManagementComponent>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectTeamManagementComponent]
    });
    fixture = TestBed.createComponent(ProjectTeamManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
