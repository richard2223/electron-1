import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Router, PreloadAllModules } from '@angular/router';
import { HttpModule, Http, RequestOptions, XHRBackend } from '@angular/http';


/**
 * Third parts UI modules
 */
import { Ng2BootstrapModule } from 'ngx-bootstrap';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
// import { BuxComponentsModule } from 'bux-components';

/**
 * The @ngrx store
 */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/**
 * Application level store components
 */
// import { reducer } from './store/app-store';
// import { UserEffects } from './store/effects/user.effects';
// import { UiEffects } from './store/effects/ui.effects';

/**
 * AOT compartible factory for HttpService
 * @param backend The instance of XHRBackend
 * @param options The instance of RequestOptions
 */


import { ROUTES } from './app.routes';
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";
import { NoContentComponent } from "./no-content/no-content.component";



@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
        Ng2BootstrapModule.forRoot(),
        ToastModule.forRoot(),

        /**
         * StoreModule.provideStore is imported once in the root module, accepting a reducer
         * function or object map of reducer functions. If passed an object of
         * reducers, combineReducers will be run creating your application
         * meta-reducer. This returns all providers for an @ngrx/store
         * based application.
         * 
         * See: https://github.com/ngrx/store
         */
        //StoreModule.provideStore(reducer),

        /**
         * @ngrx/router-store keeps router state up-to-date in the store and uses
         * the store as the single source of truth for the router's state.
         * 
         * See: https://github.com/ngrx/router-store
         */
        //RouterStoreModule.connectRouter(),

        /**
         * Store devtools instrument the store retaining past versions of state
         * and recalculating new states. This enables powerful time-travel
         * debugging.
         *
         * To use the debugger, install the Redux Devtools extension for either
         * Chrome or Firefox
         *
         * See: https://github.com/zalmoxisus/redux-devtools-extension
         */
        StoreDevtoolsModule.instrumentOnlyWithExtension({
            maxAge: 20
        }),

        /**
         * EffectsModule.run() sets up the effects class to be initialized
         * immediately when the application starts.
         *
         * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
         */
        // EffectsModule.run(UserEffects),
        // EffectsModule.run(UiEffects)
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        NoContentComponent
    ],
    entryComponents: [
        AppComponent,
    ],
    providers: [

    ],
    exports: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        NoContentComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
