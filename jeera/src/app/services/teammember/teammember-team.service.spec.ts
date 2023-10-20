import { TestBed } from '@angular/core/testing';

import { TeammemberTeamService } from './teammember-team.service';

describe('TeammemberTeamService', () => {
  let service: TeammemberTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeammemberTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
