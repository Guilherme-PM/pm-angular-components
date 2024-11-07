import { TestBed } from '@angular/core/testing';

import { PmConfigService } from '../pm-config/pm-config.service';

describe('PmConfigService', () => {
  let service: PmConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PmConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
