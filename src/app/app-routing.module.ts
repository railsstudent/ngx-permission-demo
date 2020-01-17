import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { RouteAComponent, RouteBComponent, UnauthComponent, UnauthGuestComponent } from './components';

const routes: Routes = [
    {
        path: 'route-a',
        component: RouteAComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
            permissions: {
                only: ['PRESIDENT', 'PRIME-MINISTER'],
                redirectTo: {
                    PRESIDENT: (
                        rejectedPermissionName: string,
                        activateRouteSnapshot: ActivatedRouteSnapshot,
                        routeStateSnapshot: RouterStateSnapshot,
                    ) => {
                        console.log('rejectedPermissionName', rejectedPermissionName);
                        console.log('activateRouteSnapshot', activateRouteSnapshot);
                        console.log('routeStateSnapshot', routeStateSnapshot);
                        return 'unauth';
                    },
                    'PRIME-MINISTER': (
                        rejectedPermissionName: string,
                        activateRouteSnapshot: ActivatedRouteSnapshot,
                        routeStateSnapshot: RouterStateSnapshot,
                    ) => {
                        console.log('rejectedPermissionName', rejectedPermissionName);
                        console.log('activateRouteSnapshot', activateRouteSnapshot);
                        console.log('routeStateSnapshot', routeStateSnapshot);
                        return 'unauth';
                    },
                },
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
                redirectTo: {
                    GUEST: (
                        rejectedPermissionName: string,
                        activateRouteSnapshot: ActivatedRouteSnapshot,
                        routeStateSnapshot: RouterStateSnapshot,
                    ) => {
                        console.log('rejectedPermissionName', rejectedPermissionName);
                        console.log('activateRouteSnapshot', activateRouteSnapshot);
                        console.log('routeStateSnapshot', routeStateSnapshot);
                        return 'unauth-guest';
                    },
                    ADMIN: (
                        rejectedPermissionName: string,
                        activateRouteSnapshot: ActivatedRouteSnapshot,
                        routeStateSnapshot: RouterStateSnapshot,
                    ) => {
                        console.log('rejectedPermissionName', rejectedPermissionName);
                        console.log('activateRouteSnapshot', activateRouteSnapshot);
                        console.log('routeStateSnapshot', routeStateSnapshot);
                        return 'unauth-guest';
                    },
                },
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
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
