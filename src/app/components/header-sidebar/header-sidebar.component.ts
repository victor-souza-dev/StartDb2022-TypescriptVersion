import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/SidebarService/sidebar-service.service';

@Component({
  selector: 'app-header-sidebar',
  templateUrl: './header-sidebar.component.html',
  styleUrls: ['./header-sidebar.component.scss'],
})
export class HeaderSidebarComponent {
  constructor(private sidebarService: SidebarService) {}

  toggleSidebar(): void {
    this.sidebarService.toggleSidebar();
  }
}
