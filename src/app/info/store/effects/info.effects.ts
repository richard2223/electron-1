/**
 * @license
 * Copyright (c) 2017, Barclays Africa Technology, All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import '../../../rxjs-operators';

import { InfoService } from '../../services/info.service';
import { Info } from '../../model/info';

import * as info from '../actions/info.actions';

/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 * The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * Documentation on `toPayload` can be found here:
 * https://github.com/ngrx/effects/blob/master/docs/api.md#topayload
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */
@Injectable()
export class InfoEffects {

    constructor(
        private actions$: Actions,
        private service: InfoService
    ) { }

    /**
     * Load info
     */
    @Effect()
    load$: Observable<Action> = this.actions$
        .ofType(info.INFO_LOAD)
        .switchMap(() => this.service.getInfo())
        .map((value: Info) => new info.InfoLoadSuccessAction(value))
        .catch((error, caught) => Observable.of(new info.InfoLoadFailAction(error)));
}
