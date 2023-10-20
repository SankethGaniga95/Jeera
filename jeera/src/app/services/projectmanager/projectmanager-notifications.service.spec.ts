import { TestBed } from '@angular/core/testing';

import { ProjectmanagerNotificationsService } from './projectmanager-notifications.service';

describe('ProjectmanagerNotificationsService', () => {
  let service: ProjectmanagerNotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectmanagerNotificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
