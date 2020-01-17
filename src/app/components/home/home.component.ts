import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <p>
            Home component
        </p>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
