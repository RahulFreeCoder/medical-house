import {CanActivate, Router} from '@angular/router'
import {Injectable} from '@angular/core'

import {AuthService } from './auth.service'

@Injectable()
export class AuthGuardService implements CanActivate{

    constructor (private auth : AuthService, private router: Router) {   }

    canActivate(): boolean {
        if (!this.auth.isAuthenticated()) {
        this.router.navigate(['/welcome']);
        return false;
        }
        return true;
    }

}