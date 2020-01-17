import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent, RouteAComponent, RouteBComponent } from './components';

@NgModule({
    imports: [BrowserModule, FormsModule, NgxPermissionsModule.forRoot(), AppRoutingModule],
    declarations: [AppComponent, HelloComponent, RouteAComponent, RouteBComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
