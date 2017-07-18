import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { routes } from './home.routing';

import { HomeComponent } from './home.component';

export { HomeComponent } from './home.component';

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule { }
