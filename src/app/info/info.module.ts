import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

/**
 * The @ngrx store
 */
import { StoreModule, Store, ActionReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/**
 * Feature level store components
 */
import { reducers } from './store/feature-store';
import { InfoEffects } from './store/effects/info.effects';

import { routes } from './info.routing';
import { InfoComponent } from './info.component';

/**
 * Feature level services
 */
import { InfoService } from './services/info.service';

declare var global: any;
type CreateReducer = (asyncReducers: any) => ActionReducer<any>;

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),

        /**
         * StoreModule.provideStore is imported once in the root module, accepting a reducer
         * function or object map of reducer functions. If passed an object of
         * reducers, combineReducers will be run creating your application
         * meta-reducer. This returns all providers for an @ngrx/store
         * based application.
         * 
         * See: https://github.com/ngrx/store
         */
        StoreModule,

        /**
         * EffectsModule.run() sets up the effects class to be initialized
         * immediately when the application starts.
         *
         * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
         */
        EffectsModule.run(InfoEffects)
    ],
    declarations: [
        InfoComponent
    ],
    providers: [
        InfoService,
    ],
    exports: [InfoComponent]
})
export class InfoModule {
    constructor(private store: Store<any>) {
        let newReducer = global.createReducer(reducers);
        this.store.replaceReducer(newReducer);
    }
}
