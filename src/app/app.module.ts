import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';

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
  // providers: [
  //   {
  //     provide: APP_INITIALIZER,
  //     useFactory: (ps: NgxPermissionsService ) => function() {
  //       const permissions = [
  //         'ADMIN', 
  //         'GUEST',
  //         'PRESIDENT',
  //         'PRIME-MINISTER'
  //       ];
  //       return ps.addPermission(permissions);
  //     },
  //     deps: [NgxPermissionsService],
  //     multi: true
  //   }
  // ]
})
export class AppModule { }
