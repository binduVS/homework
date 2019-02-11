import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';
import { DashOneModule } from '../dashboard-one/dashboardOne.module';
import { DashTwoModule } from '../dashboard-two/dashboard.module';
import { DashboardOneComponent } from '../dashboard-one/dashboard-one.component';
import { DashboardTwoComponent } from '../dashboard-two/dashboard-two.component';

@NgModule({
  declarations: [LoginComponent ],
  imports: [
    DashOneModule,
    DashTwoModule,
    LoginRoutingModule
  ],
  providers: []
})
export class loginModule { }
