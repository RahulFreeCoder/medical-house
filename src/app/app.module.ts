import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http'
import {FwModule } from '../fw/fw.module'

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { WelcomeComponent } from './home/welcome.component';
import { AboutComponent } from './home/about.component';
import {ProductComponent} from './product/product.component';
import {ProductnavComponent} from './product/productnav.component';
import {RegisterComponent} from'./users/register.component';

import {appRoutes} from './routes';
import {AuthService} from './home/auth.service';
import {AuthGuardService} from './home/auth.guard.service';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WelcomeComponent,
    AboutComponent,
    ProductComponent,
    ProductnavComponent,
    RegisterComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    FwModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ AuthService, AuthGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
