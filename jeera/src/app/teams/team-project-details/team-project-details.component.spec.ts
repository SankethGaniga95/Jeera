import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamProjectDetailsComponent } from './team-project-details.component';

describe('TeamProjectDetailsComponent', () => {
  let component: TeamProjectDetailsComponent;
  let fixture: ComponentFixture<TeamProjectDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamProjectDetailsComponent]
    });
    fixture = TestBed.createComponent(TeamProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
