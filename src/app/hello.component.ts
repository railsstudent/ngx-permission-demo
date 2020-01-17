import { Component, Input, OnInit } from '@angular/core';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }
    div.buttons {
      padding: 10px;
    }

    div.buttons > button {
      display: block;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  `]
})
export class HelloComponent implements OnInit  {
  @Input() name: string;

  roles = ['Guest', 'Admin', 'President', 'PrimeMinister', 'PresidentAndPrimeMinister'];
  permissions$ = this.ps.permissions$;
  roles$ = this.rs.roles$;

  unsubscribe$ = new Subject();

  hasRole$ = this.roles$.pipe(
    map(permissions => Object.keys(permissions).length > 0),
    takeUntil(this.unsubscribe$),
  );

  constructor(private  ps: NgxPermissionsService, private rs: NgxRolesService) {}

  ngOnInit() {}

  addRole(role: string) {
    this.roles.forEach(r => this.rs.removeRole(r));
    switch(role) {
      case 'Guest':
        this.ps.loadPermissions(['GUEST']);
        this.rs.addRole(role, ['GUEST']);
        break;
      case 'Admin':
        this.ps.loadPermissions(['ADMIN']);
        this.rs.addRole(role, ['ADMIN']);
        break;
      case 'President':
        this.ps.loadPermissions(['PRESIDENT']);
        this.rs.addRole(role, ['PRESIDENT']);
        break;
      case 'PrimeMinister':
        this.ps.loadPermissions(['PRIME-MINISTER']);
        this.rs.addRole(role, ['PRIME-MINISTER']);
        break;
      case 'PresidentAndPrimeMinister': 
        this.ps.loadPermissions(['PRIME-MINISTER', 'PRESIDENT']);
        this.rs.addRole(role, ['PRIME-MINISTER', 'PRESIDENT']);
        break;
      default:
        break;
    }
  }
}
