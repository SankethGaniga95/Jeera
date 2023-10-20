import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamNotificationsComponent } from './team-notifications.component';

describe('TeamNotificationsComponent', () => {
  let component: TeamNotificationsComponent;
  let fixture: ComponentFixture<TeamNotificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamNotificationsComponent]
    });
    fixture = TestBed.createComponent(TeamNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
