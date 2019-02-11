import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component'
import { DashboardOneComponent } from '../dashboard-one/dashboard-one.component';
import { DashboardTwoComponent } from '../dashboard-two/dashboard-two.component';

const routes: Routes = [
    { path: 'dashboard1', component: DashboardOneComponent },
    { path: 'dashboard2', component: DashboardTwoComponent }
  ];
export const LoginRoutingModule: ModuleWithProviders = RouterModule.forChild(routes)