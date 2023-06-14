import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/auth/service/login.service';

@Component({
  selector: 'app-checkout-status',
  templateUrl: './checkout-status.component.html',
  styleUrls: ['./checkout-status.component.css']
})
export class CheckoutStatusComponent implements OnInit {
  constructor(private service : LoginService, private router : ActivatedRoute) { }
  client: any;
  status: any;
  ngOnInit(): void {
    this.router.params.subscribe((params)=>{
      const status = params['status'];
      this.status = status;
    });
    this.service.getCurrentUser().subscribe((data)=>{
      this.client = data;
  });
  }

}
