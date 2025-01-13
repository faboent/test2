import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],  // Import CommonModule here
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Infragistics Grid</a>
      <button class="navbar-toggler" type="button" (click)="toggleNavbar()" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav" [ngClass]="{ 'show': isNavbarCollapsed }">
        <ul class="navbar-nav">
          <li class="nav-item"><a routerLink="/grid1" class="nav-link">Grid1</a></li>
          <li class="nav-item"><a routerLink="/grid2" class="nav-link">Grid2</a></li>
          <li class="nav-item"><a routerLink="/grid3" class="nav-link">Grid3</a></li>
          <li class="nav-item"><a routerLink="/grid4" class="nav-link">Grid4</a></li>
        </ul>
      </div>
    </nav>
  `,
})
export class NavbarComponent {
  isNavbarCollapsed = false;

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
