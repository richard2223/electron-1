import {
    async,
    TestBed,
    fakeAsync,
    inject,
    getTestBed,
    tick
} from '@angular/core/testing';

import {
    HttpModule,
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

import { InfoService } from './info.service';
import { Info } from '../model/info';

describe('Info: InfoService', () => {

    let service: InfoService;
    let backend: MockBackend;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                MockBackend,
                InfoService,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        });
    }));

    beforeEach(() => {
        service = TestBed.get(InfoService);
        backend = TestBed.get(XHRBackend);
    });

    describe('get info', () => {

        let response = {
            "projectName": "Home",
            "projectVersion": "1.0.0"
        };

        it('should retun the Info', () => {

            backend.connections.subscribe(connection => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(response)
                })));
            });

            service.getInfo().subscribe((info: Info) => {
                expect(info).toBeDefined();
                //
                expect(info).toEqual(response);
            });
        });

    });
});