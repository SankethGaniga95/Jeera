import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSidebarComponent } from './team-sidebar.component';

describe('TeamSidebarComponent', () => {
  let component: TeamSidebarComponent;
  let fixture: ComponentFixture<TeamSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamSidebarComponent]
    });
    fixture = TestBed.createComponent(TeamSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
