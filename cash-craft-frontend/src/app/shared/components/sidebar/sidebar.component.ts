import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  menuItems: any[] = [
    {
      icon: 'pi pi-home',
      label: 'Dashboard',
      routerLink: '/',
    },
    {
      icon: 'pi pi-bookmark',
      label: 'Bookmarks',
      routerLink: '/bookmarks',
    },
    {
      icon: 'pi pi-users',
      label: 'Team',
      routerLink: '/team',
    },
    {
      icon: 'pi pi-comments',
      label: 'Messages',
      routerLink: '/messages',
    },
    {
      icon: 'pi pi-calendar',
      label: 'Calendar',
      routerLink: '/calendar',
    },
    {
      icon: 'pi pi-cog',
      label: 'Settings',
      routerLink: '/settings',
    },
  ];
}
