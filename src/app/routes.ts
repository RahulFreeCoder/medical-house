import {Routes, CanActivate} from '@angular/router';

import { WelcomeComponent } from "./home/welcome.component";
import {AboutComponent } from './home/about.component';
import {ProductComponent} from './product/product.component';
import {RegisterComponent} from './users/register.component';

import {AuthGuardService as AuthGuard } from './home/auth.guard.service'

export const appRoutes:Routes = [
{path: 'welcome', component: WelcomeComponent},
{path: 'about', component: AboutComponent},
{path: 'product', component: ProductComponent, canActivate : [AuthGuard]},
{path: 'register', component: RegisterComponent},
{path:'', redirectTo:'/about',pathMatch:'full'}
]

