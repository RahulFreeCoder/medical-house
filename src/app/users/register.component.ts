import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from '../home/auth.service'; 


@Component({
    templateUrl: 'register.component.html',
    styles:[`
     em {color:#E05C65; padding-left:10px; font-size:10px; float:right}
    .error input {background-color:#E3C3C5;}
    .errormessage {background-color:#E3C3C5; font-size:20px}
    `],
})
export class RegisterComponent implements OnInit {
    profileForm : FormGroup;
    userName:FormControl;
    email:FormControl;
    password:FormControl;
    city:FormControl;
    state:FormControl;
    zip: FormControl;
    success = false;
    failed = false;
    
    constructor(private user:AuthService, private router: Router ){}
    
    ngOnInit(){
        this.userName = new FormControl('', Validators.required);
        this.email = new FormControl('',Validators.required);
        this.password = new FormControl('',Validators.required);
        this.city = new FormControl('');
        this.state= new FormControl('');
        this.zip = new FormControl('');
        this.profileForm = new FormGroup({
          userName: this.userName,
          email: this.email,
          password: this.password,
          city: this.city,
          state : this.state,
          zip : this.zip
        });
    }
    validateEmail(){
       return this.email.valid || this.email.untouched;
    } 

    validateUname(){
        return this.userName.valid || this.userName.untouched;
    }
     
     
     validatePassword(){
        return this.password.valid || this.password.untouched;
    } 

    registerUser(profileForm){
    
      if (this.profileForm.valid){
       this.user.saveUser(profileForm)
       .subscribe(resp => {
            if(!resp) {
                this.failed = true;
            } else {
                this.success = true;
                this.router.navigate(['/about']);
                    }
            });
     }
    }

}