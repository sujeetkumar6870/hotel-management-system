import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, RouterLink],
  styleUrl: './admin.scss',
  template: `
    <h3>Admin Dashboard</h3>
    <nav>
      <a routerLink="manage-hotels" class="btn btn-outline-primary me-2">Manage Hotels</a>
      <a routerLink="manage-bookings" class="btn btn-outline-secondary">Manage Bookings</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AdminComponent {}

