import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './auth/service/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'destino-cordoba';
  currentUser!:any;
  constructor(public router: Router, private loginService: LoginService) {}
  ngOnInit(): void {
  }
}
