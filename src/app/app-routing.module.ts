import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteAComponent } from './route-a/router-a.component';
import { RouteBComponent } from './route-b/router-b.component';

const routes: Routes = [
  {
    path: 'route-a',
    component: RouteAComponent
  },
    {
    path: 'route-b',
    component: RouteBComponent
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
