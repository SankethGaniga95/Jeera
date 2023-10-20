import { TestBed } from '@angular/core/testing';

import { ProjectmanagerProjectsService } from './projectmanager-projects.service';

describe('ProjectmanagerProjectsService', () => {
  let service: ProjectmanagerProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectmanagerProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
