/**
 * @license
 * Copyright (c) 2017, Barclays Africa Technology, All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from "rxjs/Observable";
import { Subscriber } from "rxjs/Subscriber";
import 'rxjs/add/operator/map';

import { Info } from '../model/info';

@Injectable()
export class InfoService {

    constructor(private http: Http) {}

    getInfo() {
        return this.http.get('/api/info').map(res => res.json());
    }
}