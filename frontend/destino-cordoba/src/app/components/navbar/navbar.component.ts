import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router) {}
  @Input() screen: string = '';
  isLogged: boolean = true;
  onClick(): void {
    this.isLogged ? this.router.navigate(['/logout']) : this.router.navigate(['/login']);
    this.isLogged = !this.isLogged;
  }
}