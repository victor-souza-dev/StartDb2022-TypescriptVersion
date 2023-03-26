import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwitchThemeService {
  private isSwitchTheme = new BehaviorSubject<boolean>(false);

  toggleTheme(): void {
    this.isSwitchTheme.next(!this.isSwitchTheme.value);
  }

  isSwitchTheme$ = this.isSwitchTheme.asObservable();
}
