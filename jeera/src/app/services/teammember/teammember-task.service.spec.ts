import { TestBed } from '@angular/core/testing';

import { TeammemberTaskService } from './teammember-task.service';

describe('TeammemberTaskService', () => {
  let service: TeammemberTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeammemberTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
