import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-route-b',
    templateUrl: './route-b.component.html',
    styleUrls: ['./route-b.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteBComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
