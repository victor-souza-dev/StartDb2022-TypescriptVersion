import { Component, HostBinding } from '@angular/core';
import { SwitchThemeService } from './services/SwitchThemeService/switch-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private isDark = false;
  constructor(private themeService: SwitchThemeService) {}

  @HostBinding('class')
  get themeMode() {
    return this.isDark ? 'theme-dark' : 'theme-light';
  }

  ngOnInit(): void {
    this.themeService.isSwitchTheme$.subscribe((isOpen) => {
      this.isDark = isOpen;
    });
  }
}
