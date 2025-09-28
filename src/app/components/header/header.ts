import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  styleUrl: './header.scss',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="/">🏨 Hotel Management</a>
        <ul class="navbar-nav">
          <li class="nav-item"><a routerLink="/" class="nav-link">Hotels</a></li>
          <li class="nav-item"><a routerLink="/booking" class="nav-link">Booking</a></li>
          <li class="nav-item"><a routerLink="/admin" class="nav-link">Admin</a></li>
        </ul>
      </div>
    </nav>
  `
})
export class HeaderComponent {}
