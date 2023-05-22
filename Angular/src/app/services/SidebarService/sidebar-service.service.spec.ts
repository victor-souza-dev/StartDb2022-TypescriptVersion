import { TestBed } from '@angular/core/testing';

import { SidebarServiceService } from './sidebar-service.service';

describe('SidebarServiceService', () => {
  let service: SidebarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
