/**
 * @license
 * Copyright (c) 2017, Barclays Africa Technology, All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { Subscriber } from "rxjs/Subscriber";
import 'rxjs/add/operator/map';

import { Info } from '../model/info';

@Injectable()
export class InfoService {

    getInfo() {
        return Observable.create((sub: Subscriber<Info>) => {
            let info: Info = {
                projectName: 'Home',
                projectVersion: '1.0.0'
            };
            sub.next(info);
            sub.complete();
        });
    }
}