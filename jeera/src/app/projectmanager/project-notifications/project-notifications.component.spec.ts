import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectNotificationsComponent } from './project-notifications.component';

describe('ProjectNotificationsComponent', () => {
  let component: ProjectNotificationsComponent;
  let fixture: ComponentFixture<ProjectNotificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectNotificationsComponent]
    });
    fixture = TestBed.createComponent(ProjectNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
