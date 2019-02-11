import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'login' }
  ];
export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true})