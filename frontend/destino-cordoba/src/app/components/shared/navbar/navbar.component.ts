import { Component, Input, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  constructor(private router: Router) {}
  @Input() screen: string = '';
  isLogged: boolean = true;
  onClick(): void {
    this.isLogged ? this.router.navigate(['/logout']) : this.router.navigate(['/login']);
    this.isLogged = !this.isLogged;
  }
  openMenu(): void {
    this.trigger.openMenu();
  }
  logout(): void {
    this.isLogged = false;
  }
  username = 'Jeremy';
}