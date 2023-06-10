import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from "../../auth/service/login.service";
import {Subscription} from "rxjs";
import {User} from "../../models/user";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

    subscription!: Subscription;
    isAdmin: boolean = false;
    currentUser!: User;
    showProfileTab: boolean = false;
    showContentTab: boolean = false;

    constructor(private loginService: LoginService) {
    }

    ngOnInit() {
        this.subscription = this.loginService.getCurrentUser().subscribe({
            next: (res) => {
                this.isAdmin = !!res.rol?.includes("ADM");
                this.currentUser = res;
            }
        })
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    showContentBy(contentName: string) {
        if (contentName === "profile") {
            this.showProfileTab = !this.showProfileTab;
            this.showContentTab = false;
        } else {
            this.showContentTab = !this.showContentTab;
            this.showProfileTab = false;
        }
    }
}
