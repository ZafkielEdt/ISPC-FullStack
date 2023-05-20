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
  isLogged: boolean = false;
  onClick(): void {
    console.log(this.isLogged);
    this.router.navigateByUrl('/login');
  }
  openMenu(): void {
    this.trigger.openMenu();
  }
  logout(): void {
    this.isLogged = false;
  }
  username = 'Jeremy';
}
