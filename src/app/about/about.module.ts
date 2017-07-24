import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { routes } from './about.routing';
import { AboutComponent } from './about.component';

export { AboutComponent } from './about.component';

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [AboutComponent],
    exports: [AboutComponent]
})
export class AboutModule { }
