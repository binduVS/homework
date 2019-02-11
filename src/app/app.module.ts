import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataServiceService } from './data-service.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { loginModule } from './login/login.module';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    loginModule
  ],
  declarations: [ AppComponent
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
