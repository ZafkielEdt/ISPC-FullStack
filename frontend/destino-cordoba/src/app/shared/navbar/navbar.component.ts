import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/service/login.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit{
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  constructor(private router: Router, private loginService: LoginService) {}
  @Input() screen: string = '';
  isLogged!: boolean;
  user!:User;
  ngOnInit(): void {
    this.isLogged = this.loginService.islogged();

    this.loginService.currentUser.subscribe((data) => {
      this.user = data;
    });
  }
  openMenu(): void {
    this.trigger.openMenu();
  }
  logout(): void {
    this.loginService.logout();
  }
  
}
