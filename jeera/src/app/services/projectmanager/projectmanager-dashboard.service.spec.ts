import { TestBed } from '@angular/core/testing';

import { ProjectmanagerDashboardService } from './projectmanager-dashboard.service';

describe('ProjectmanagerDashboardService', () => {
  let service: ProjectmanagerDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectmanagerDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
