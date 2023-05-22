import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isOpenSubject = new BehaviorSubject<boolean>(false);

  toggleSidebar(): void {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }

  isOpen$ = this.isOpenSubject.asObservable();
}
