import { TestBed } from '@angular/core/testing';

import { TeammemberProjectService } from './teammember-project.service';

describe('TeammemberProjectService', () => {
  let service: TeammemberProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeammemberProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
