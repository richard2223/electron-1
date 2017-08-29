import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as fromRoot from './store/feature-store';
import * as info from './store/actions/info.actions';
import { Info } from './model/info';


@Component({
    templateUrl: './info.component.html'
})
export class InfoComponent implements OnInit {

    info$: Observable<Info>;
    user$: Observable<{
        id: string;
        username: string;
        firstName: string;
        lastName: string;
        roles: string[];
    }>;

    constructor(private store: Store<fromRoot.FeatureState>) {
        this.info$ = store.select(fromRoot.getInfo);
        // The first user is the name of user's state
        // The second user is the property name in user's state
        this.user$ = store.select('user', 'user');
    }

    ngOnInit() {
        this.store.dispatch(new info.InfotLoadAction());
    }
}