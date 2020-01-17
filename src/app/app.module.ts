import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouteAComponent } from './route-a/route-a.component';
import { RouteBComponent } from './route-b/route-b.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    NgxPermissionsModule.forRoot(),
    AppRoutingModule 
  ],
  declarations: [ AppComponent, HelloComponent, RouteAComponent, RouteBComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
