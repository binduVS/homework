import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardTwoComponent } from './dashboard-two.component';
import { DataServiceService } from '../data-service.service';
// import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
    // MatFormFieldModule
  ],
  declarations: [ DashboardTwoComponent
  ],
  providers: [],
  exports: [
    // MatFormFieldModule
  ]
})
export class DashTwoModule { }
