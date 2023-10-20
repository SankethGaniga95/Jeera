import { TestBed } from '@angular/core/testing';

import { TeammemberNotificationsService } from './teammember-notifications.service';

describe('TeammemberNotificationsService', () => {
  let service: TeammemberNotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeammemberNotificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
