import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchThemeIconComponent } from './switch-theme-icon.component';

describe('SwitchThemeIconComponent', () => {
  let component: SwitchThemeIconComponent;
  let fixture: ComponentFixture<SwitchThemeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchThemeIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchThemeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
