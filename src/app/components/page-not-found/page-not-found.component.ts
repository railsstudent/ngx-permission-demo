import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxRolesService } from 'ngx-permissions';
import { Subject, timer } from 'rxjs';
import { map, take, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-page-not-found',
    template: `
        <p>You will be redirected to the home page in {{ counter }} seconds to redirect there.</p>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
    counter: number;

    private unsubscribe$ = new Subject();

    constructor(private rs: NgxRolesService, private router: Router, private cdr: ChangeDetectorRef) {}

    async ngOnInit() {
        const hasPresidentRole$ = await this.rs.hasOnlyRoles('President');
        const hasAdminRole$ = await this.rs.hasOnlyRoles('Admin');
        const hasPrimeMinisterRole$ = await this.rs.hasOnlyRoles('PrimeMinister');
        const hasPresidentAndPrimeMinisterRole$ = await this.rs.hasOnlyRoles('PresidentAndPrimeMinister');

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
                    if (hasPresidentRole$ || hasPrimeMinisterRole$ || hasPresidentAndPrimeMinisterRole$) {
                        this.router.navigate(['/route-a']);
                    } else if (hasAdminRole$) {
                        this.router.navigate(['/route-b']);
                    }
                }
            });
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
