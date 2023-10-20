import { TestBed } from '@angular/core/testing';

import { TeammemberDashboardService } from './teammember-dashboard.service';

describe('TeammemberDashboardService', () => {
  let service: TeammemberDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeammemberDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
