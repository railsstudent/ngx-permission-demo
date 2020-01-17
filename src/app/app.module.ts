import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    NgxPermissionsModule.forRoot() 
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
