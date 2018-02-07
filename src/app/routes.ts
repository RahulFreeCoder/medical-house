import {Routes} from '@angular/router';

import { WelcomeComponent } from "./home/welcome.component";
import {AboutComponent } from './home/about.component';
import {ProductComponent} from './product/product.component';
import {RegisterComponent} from './users/register.component';

export const appRoutes:Routes = [
{path: 'welcome', component: WelcomeComponent},
{path: 'about', component: AboutComponent},
{path: 'product', component: ProductComponent},
{path: 'register', component: RegisterComponent},
{path:'', redirectTo:'/about',pathMatch:'full'}
]

