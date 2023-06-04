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
  initials!: string;
  ngOnInit(): void {
    this.isLogged = this.loginService.islogged();
    this.loginService.getCurrentUser().subscribe({
      next: res => {
        this.user = res;
        if(this.user.photo === null){
          this.initials = this.user.first_name.charAt(0) + this.user.last_name.charAt(0);
        }
      }})
  }
  openMenu(): void {
    this.trigger.openMenu();
  }
  logout(): void {
    this.loginService.logout();
  }
  

}
export interface UserLogged {
  username : string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone?: string;
  rol?: string[];
  photo?: string;
  address?: any;
}