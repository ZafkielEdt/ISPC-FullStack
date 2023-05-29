import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css']
})
export class DashboardContainerComponent {

  selectUser: boolean = false;
  selectDestination: boolean = false;

  selectedUsers() {
    this.selectUser = !this.selectUser;
  }

  selectedDestination() {
    this.selectDestination = !this.selectDestination;
  }
}
