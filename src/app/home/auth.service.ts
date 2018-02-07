import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Response} from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import {IUser} from './user.model'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
  };

@Injectable()
export class AuthService {
 
  private _userUrl = 'http://localhost:3000/api/Users';
  public currentUser: String ;
  private loggingsuccess: boolean = false;
  public token: any;
  
  constructor(private http: HttpClient) {  }

    ngOnInit(){
       var lcurrentUser = JSON.parse(localStorage.getItem('currentUser'));
       this.token = lcurrentUser && lcurrentUser.token;
       this.currentUser = lcurrentUser.username;
       console.log(this.currentUser);
    }
    loginUser(userName: string, password: string) {
      let loginInfo = { email: userName, password: password };

      return this.http.post(this._userUrl + '/login', JSON.stringify(loginInfo), httpOptions)
       .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response;
               
                if (token) {
                    this.token = token;
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: userName, token: token }));
                     this.currentUser = JSON.parse(localStorage.getItem('currentUser')).username;   
                            
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
      
   }
 
    isAuthenticated(){
         var lcurrentUser = JSON.parse(localStorage.getItem('currentUser'));
        return !!lcurrentUser;
    }

    saveUser(user){
        return this.http.post(this._userUrl,user, httpOptions)
        .do(resp => {
            console.log(resp);
        }).catch(error => {
        return Observable.throw(Error);
        }) ;
       
    }

    getCurrentUser(){
        var lcurrentUser = JSON.parse(localStorage.getItem('currentUser'));
        return lcurrentUser.username;

    }  
    logout() {
      this.token = null;
      localStorage.removeItem('currentUser');
  
    } 
    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }

}
//validateUser(email:String, password:String){
    //     let headers = new Headers({ 'Content-Type': 'application/json'});
    //     let options = new RequestOptions({headers: headers});
    //     let loginInfo = { username: email, password: password };

    //     return this.http.get(this._userUrl)
    //     .map((users: IUser[]) => users.find(u => u.email === email))
    //     .do(resp => {
    //         console.log(resp);
    //     if(resp) {
    //         this.loggingsuccess  = true;
    //         this.currentUser = <IUser>resp   }
    //     }).catch(error => {
    //     return Observable.of(false);
    //     }) 
    // }