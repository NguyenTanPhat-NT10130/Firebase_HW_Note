import { TestBed } from '@angular/core/testing';

import { CaculationService } from './caculation.service';

describe('CaculationService', () => {
  let service: CaculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
