import { TestBed } from '@angular/core/testing';

import { ProjectmanagerTeamService } from './projectmanager-team.service';

describe('ProjectmanagerTeamService', () => {
  let service: ProjectmanagerTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectmanagerTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
