import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from '../app/include/sidenav/sidenav.component';
import { NavbarComponent } from '../app/include/navbar/navbar.component';
import { CalanderComponent } from './templates/calander/calander.component';
import { TimeLineComponent } from './templates/time-line/time-line.component';
import { SignupComponent } from './templates/signup/signup.component';
import { HomeComponent } from './templates/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavbarComponent,
    CalanderComponent,
    TimeLineComponent,
    SignupComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
