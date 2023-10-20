import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTaskManagementComponent } from './team-task-management.component';

describe('TeamTaskManagementComponent', () => {
  let component: TeamTaskManagementComponent;
  let fixture: ComponentFixture<TeamTaskManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamTaskManagementComponent]
    });
    fixture = TestBed.createComponent(TeamTaskManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
