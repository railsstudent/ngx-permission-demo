import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent, RouteAComponent, RouteBComponent } from './components';
import { UnauthComponent } from './components/unauth/unauth.component';
import { UnauthGuestComponent } from './components/unauth-guest/unauth-guest.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    imports: [BrowserModule, FormsModule, NgxPermissionsModule.forRoot(), AppRoutingModule],
    declarations: [
        AppComponent,
        HelloComponent,
        RouteAComponent,
        RouteBComponent,
        UnauthComponent,
        UnauthGuestComponent,
        PageNotFoundComponent,
        HomeComponent,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
