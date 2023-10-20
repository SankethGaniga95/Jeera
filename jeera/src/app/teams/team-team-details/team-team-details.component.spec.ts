import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTeamDetailsComponent } from './team-team-details.component';

describe('TeamTeamDetailsComponent', () => {
  let component: TeamTeamDetailsComponent;
  let fixture: ComponentFixture<TeamTeamDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamTeamDetailsComponent]
    });
    fixture = TestBed.createComponent(TeamTeamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
