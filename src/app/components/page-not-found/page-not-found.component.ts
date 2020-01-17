import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxRolesService } from 'ngx-permissions';
import { Subject, timer } from 'rxjs';
import { map, take, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-page-not-found',
    template: `
        <p>
            page-not-found works! Has president role
        </p>
        <p>hasPresidentRole: {{ hasPresidentRole$ | async }}</p>
        <p>hasAdminRole: {{ hasAdminRole$ | async }}</p>
        <p>hasPrimeMinisterRole: {{ hasPrimeMinisterRole$ | async }}</p>
        <p>hasPresidentAndPrimeMinisterRole: {{ hasPresidentAndPrimeMinisterRole$ | async }}</p>

        <p>You will be redirected to the home page in {{ counter }} seconds to redirect there.</p>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
    counter: number;

    hasPresidentRole$ = this.rs.hasOnlyRoles('President');
    hasAdminRole$ = this.rs.hasOnlyRoles('Admin');
    hasPrimeMinisterRole$ = this.rs.hasOnlyRoles('PrimeMinister');
    hasPresidentAndPrimeMinisterRole$ = this.rs.hasOnlyRoles('PresidentAndPrimeMinister');

    private unsubscribe$ = new Subject();

    constructor(private rs: NgxRolesService, private router: Router, private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        const start = 10;
        timer(0, 1000)
            .pipe(
                map(i => start - i),
                take(start + 1),
                takeUntil(this.unsubscribe$),
            )
            .subscribe(v => {
                this.counter = v;
                this.cdr.markForCheck();
                if (this.counter <= 0) {
                    this.goHome.emit(['/']);
                }
            });
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
