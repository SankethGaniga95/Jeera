import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLayoutComponent } from './team-layout.component';

describe('TeamLayoutComponent', () => {
  let component: TeamLayoutComponent;
  let fixture: ComponentFixture<TeamLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamLayoutComponent]
    });
    fixture = TestBed.createComponent(TeamLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
