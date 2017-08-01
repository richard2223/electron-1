import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { routes } from './info.routing';
import { InfoComponent } from './info.component';


@NgModule({
    imports: [CommonModule, FormsModule, RouterModule.forChild(routes), ],
    declarations: [InfoComponent],
    exports: [InfoComponent]
})
export class InfoModule { }
