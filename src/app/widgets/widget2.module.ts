import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { routes } from './widget2.routing';

import { Widget2Component } from "./widget2.component";


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        Widget2Component,
    ],
    exports: [
        Widget2Component,
    ],
    providers: [
        { provide: 'components', useValue: [], multi: true }
    ]
})

export class Widget2Module { }