import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-route-a',
    templateUrl: './route-a.component.html',
    styleUrls: ['./route-a.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteAComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
