import { Routes } from '@angular/router';
import { ComponentDemoComponent } from './component-demo.component';
import { TodoComponent } from './todo.component';
import { FeaturesComponent } from './features.component';

export const routes: Routes = [
  { path: '', component: FeaturesComponent },
  { path: 'components', component: ComponentDemoComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'todo', component: TodoComponent },
];
