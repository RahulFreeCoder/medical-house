import { Component, OnInit } from '@angular/core'

import {AuthService} from '../home/auth.service'

@Component({
    selector: 'nav-root',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
title = 'MediHouse';
authuser : any;
currentuser: String;
constructor(private auth: AuthService){
}
ngOnInit(){
    this.authuser = this.auth.isAuthenticated();
    if (this.authuser){
    this.currentuser = this.auth.getCurrentUser();
    }
}
}
