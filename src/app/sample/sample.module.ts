import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { FeaturesComponent } from './features.component';
import { ComponentDemoComponent } from './component-demo.component';
import { TodoComponent } from './todo.component';

import { routes } from './sample.routing';
import { TodoService } from './services/todo.service';

import { Ng2BootstrapModule } from 'ngx-bootstrap';
import { ToastModule } from 'ng2-toastr';



export function externalToDoFactory() {
    return new TodoService();
}

@NgModule({
    imports: [CommonModule, ToastModule.forRoot(), Ng2BootstrapModule.forRoot(), 
        FormsModule, RouterModule.forChild(routes), ToastModule.forRoot(),
    ],
    providers: [
        { provide: TodoService, useFactory: externalToDoFactory }
    ],
    declarations: [TodoComponent, FeaturesComponent, ComponentDemoComponent],
    exports: [TodoComponent, FeaturesComponent, ComponentDemoComponent]
})
export class SampleModule { }
