import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-unauth',
    templateUrl: './unauth.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnauthComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
