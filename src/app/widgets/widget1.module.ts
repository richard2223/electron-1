import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { routes } from './widget1.routing';
import { Widget1Component } from "./widget1.component";



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        Widget1Component,
    ],
    exports: [
        Widget1Component,
    ],
    providers: [
        { provide: 'components', useValue: [], multi: true }
    ]
})

export class Widget1Module { }