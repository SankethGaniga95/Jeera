import { TestBed } from '@angular/core/testing';

import { AdminProjectService } from './admin-project.service';

describe('AdminProjectService', () => {
  let service: AdminProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
