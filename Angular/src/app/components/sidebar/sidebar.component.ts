import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/SidebarService/sidebar-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  isOpen = false;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarService.isOpen$.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
  }
}
