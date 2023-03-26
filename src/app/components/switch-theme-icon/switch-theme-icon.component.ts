import { Component } from '@angular/core';
import { SwitchThemeService } from 'src/app/services/SwitchThemeService/switch-theme.service';

@Component({
  selector: 'app-switch-theme-icon',
  templateUrl: './switch-theme-icon.component.html',
  styleUrls: ['./switch-theme-icon.component.scss'],
})
export class SwitchThemeIconComponent {
  isTheme: boolean = false;
  constructor(private themeService: SwitchThemeService) {}

  ngOnInit(): void {
    this.themeService.isSwitchTheme$.subscribe((isOpen) => {
      this.isTheme = isOpen;
    });
  }
  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
