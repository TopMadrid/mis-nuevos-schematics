import { TestBed } from '@angular/core/testing';

import { MiNgMomentService } from './mi-ng-moment.service';

describe('MiNgMomentService', () => {
  let service: MiNgMomentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiNgMomentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
