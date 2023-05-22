import { TestBed } from '@angular/core/testing';

import { SwitchThemeService } from './switch-theme.service';

describe('SwitchThemeService', () => {
  let service: SwitchThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
