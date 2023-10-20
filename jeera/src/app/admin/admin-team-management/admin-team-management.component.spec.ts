import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTeamManagementComponent } from './admin-team-management.component';

describe('AdminTeamManagementComponent', () => {
  let component: AdminTeamManagementComponent;
  let fixture: ComponentFixture<AdminTeamManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTeamManagementComponent]
    });
    fixture = TestBed.createComponent(AdminTeamManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
