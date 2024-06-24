import { TestBed } from '@angular/core/testing';

import { MenuItemsServiceService } from './menu-items-service.service';

describe('MenuItemsServiceService', () => {
  let service: MenuItemsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuItemsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
