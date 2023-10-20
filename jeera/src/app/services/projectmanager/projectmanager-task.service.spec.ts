import { TestBed } from '@angular/core/testing';

import { ProjectmanagerTaskService } from './projectmanager-task.service';

describe('ProjectmanagerTaskService', () => {
  let service: ProjectmanagerTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectmanagerTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
