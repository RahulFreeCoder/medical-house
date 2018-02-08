import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthService} from './auth.service';

@Component({
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
    
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
    welcomeMessage: String = null;
    errorMessage: String = null;
    signSuccessful : boolean = false;
    authuser:any;
    constructor (private authService: AuthService, private auth: AuthService){}
    
    ngOnInit(){
              this.authuser = this.auth.isAuthenticated();
    }
    
    login(formValues): void{
       this.authService.loginUser(formValues.email, formValues.password)
       .subscribe(
           resp => {
           console.log(resp);
        if(!resp) {
             this.errorMessage = "Wrong email and password!";
        } else {
           
            this.signSuccessful = true;
            this.errorMessage = null;
            this.welcomeMessage = "Welcome User to store, Please Click on Proceed";
      }
     },
        err => {
            this.errorMessage = "Server Error! Please contact system administrator!";
     })
     
    }
       
    logout(){
        this.authService.logout();
    }
}
