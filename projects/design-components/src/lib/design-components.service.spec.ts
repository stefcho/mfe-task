import { TestBed } from '@angular/core/testing';

import { DesignComponentsService } from './design-components.service';

describe('DesignComponentsService', () => {
  let service: DesignComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
