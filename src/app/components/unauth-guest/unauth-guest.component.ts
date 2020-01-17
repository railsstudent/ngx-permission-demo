import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-unauth-guest',
    templateUrl: './unauth-guest.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnauthGuestComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
