import {Component} from '@angular/core';
import {AuthService} from './auth.service';
@Component({
    template:`
    <div class="container"> 
    <div class="jumbotron">
      <div class="jumbotron-content">
    <h2> Welcome to MediHouse </h2> 
    </div>
    </div>
    </div>
    `
})

export class AboutComponent {
  constructor(private auth : AuthService){}
  ngOnInit() {
    this.auth.isAuthenticated();
  }
}