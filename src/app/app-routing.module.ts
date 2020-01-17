import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import {
    HomeComponent,
    PageNotFoundComponent,
    RouteAComponent,
    RouteBComponent,
    UnauthComponent,
    UnauthGuestComponent,
} from './components';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
    },
    {
        path: 'route-a',
        component: RouteAComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
            permissions: {
                only: ['PRESIDENT', 'PRIME-MINISTER'],
                redirectTo: 'unauth',
            },
        },
    },
    {
        path: 'route-b',
        component: RouteBComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
            permissions: {
                only: ['GUEST', 'ADMIN'],
                redirectTo: 'unauth-guest',
            },
        },
    },
    {
        path: 'unauth',
        component: UnauthComponent,
    },
    {
        path: 'unauth-guest',
        component: UnauthGuestComponent,
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
            permissions: {
                only: ['PRESIDENT', 'PRIME-MINISTER', 'ADMIN'],
                redirectTo: (
                    _rejectedPermissionName: string,
                    _activateRouteSnapshot: ActivatedRouteSnapshot,
                    _routeStateSnapshot: RouterStateSnapshot,
                ) => {
                    return '/';
                },
            },
        },
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
