import { TestBed } from '@angular/core/testing';

import { ProjectmanagerAnalyticsService } from './projectmanager-analytics.service';

describe('ProjectmanagerAnalyticsService', () => {
  let service: ProjectmanagerAnalyticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectmanagerAnalyticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
