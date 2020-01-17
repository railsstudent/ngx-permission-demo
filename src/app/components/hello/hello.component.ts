import { Component, Input, OnInit } from '@angular/core';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'hello',
    templateUrl: './hello.component.html',
    styles: [
        `
            h1 {
                font-family: Lato;
            }
            div.buttons {
                padding: 10px;
            }

            div.buttons > button {
                display: block;
                margin-top: 10px;
                margin-bottom: 10px;
            }
        `,
    ],
})
export class HelloComponent implements OnInit {
    @Input() name: string;

    roles = ['Guest', 'Admin', 'President', 'PrimeMinister', 'PresidentAndPrimeMinister'];
    permissions$ = this.ps.permissions$;
    roles$ = this.rs.roles$;

    rolePermissions = {
        Guest: ['GUEST'],
        Admin: ['ADMIN'],
        President: ['PRESIDENT'],
        PrimeMinister: ['PRIME-MINISTER'],
        PresidentAndPrimeMinister: ['PRIME-MINISTER', 'PRESIDENT'],
    };

    unsubscribe$ = new Subject();

    hasRole$ = this.roles$.pipe(
        map(permissions => Object.keys(permissions).length > 0),
        takeUntil(this.unsubscribe$),
    );

    constructor(private ps: NgxPermissionsService, private rs: NgxRolesService) {}

    ngOnInit() {
        const guest = 'Guest';
        const permissions = this.rolePermissions[guest];
        this.ps.loadPermissions(permissions);
        this.rs.addRole(guest, permissions);
    }

    addRole(role: string) {
        this.roles.forEach(r => this.rs.removeRole(r));
        switch (role) {
            case 'Guest':
            case 'Admin':
            case 'President':
            case 'PrimeMinister':
            case 'PresidentAndPrimeMinister':
                const permissions = this.rolePermissions[role];
                if (permissions) {
                    this.ps.loadPermissions(permissions);
                    this.rs.addRole(role, permissions);
                }
                break;
            default:
                break;
        }
    }
}
