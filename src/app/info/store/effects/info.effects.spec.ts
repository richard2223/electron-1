import {
    async,
    TestBed,
    fakeAsync,
    inject,
    getTestBed,
    tick
} from '@angular/core/testing';

import {
    EffectsTestingModule,
    EffectsRunner
} from '@ngrx/effects/testing';

import {
    HttpModule, Http,
    BaseRequestOptions,
    XHRBackend,
    RequestOptions,
    RequestMethod,
    RequestOptionsArgs,
    Headers,
    ResponseOptions,
    Response
} from '@angular/http';

import {
    MockBackend,
    MockConnection
} from '@angular/http/testing';

import { Route, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import '../../../rxjs-operators';

import { InfoEffects } from './info.effects';

import * as info from '../actions/info.actions';

import { InfoService } from '../../services/info.service';

import { Info } from '../../model/info';

describe('Info: InfoEffects', () => {

    let runner, infoEffects, infoService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [EffectsTestingModule],
            providers: [
                InfoEffects,
                Http,
                { provide: InfoService, useValue: jasmine.createSpyObj('infoService', ['getInfo']) },
            ]
        });
    }));

    beforeEach(() => {
        runner = TestBed.get(EffectsRunner);
        infoEffects = TestBed.get(InfoEffects);
        infoService = TestBed.get(InfoService);
    });


    describe('load$', () => {

        const infoToReturn: Info = {
            "projectName": "Home",
            "projectVersion": "1.0.0"
        };

        it('should return a INFO_LOAD_SUCCESS action, with the info, on success', () => {

            const expectedResult = new info.InfoLoadSuccessAction(infoToReturn);

            infoService.getInfo.and.returnValue(Observable.of(infoToReturn));

            runner.queue(new info.InfoLoadAction());

            infoEffects.load$.subscribe(result => {
                expect(result).toEqual(expectedResult);
            });

        });

        it('should return a LOAD_MENU_FAIL action with the error, on fail', () => {

            const expectedResult = new info.InfoLoadFailAction('error');

            infoService.getInfo.and.returnValue(Observable.throw('error'));

            runner.queue(new info.InfoLoadAction());

            infoEffects.load$.subscribe(result => {
                expect(result).toEqual(expectedResult);
            });

        });
    });

});