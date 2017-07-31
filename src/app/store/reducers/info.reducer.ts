/**
 * @license
 * Copyright (c) 2017, Barclays Africa Technology, All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import * as info from '../actions/info.actions';
import { Info } from '../../model/info';

/**
 * Info state
 */
export interface InfoState {
  info: Info;
};

/**
 * User default state
 */
export const initialState: InfoState = {
  info: null,
};

/**
 * The 'info' reducer
 * @param state The current state
 * @param action The action we use to change the state
 * @return The new instance of UserState 
 */
export function reducer (state = initialState, action: info.Actions): InfoState {
    switch (action.type) {
        
        case info.INFO_LOAD_SUCCESS:
            return { 
                info: action.payload
            };

        default:
            return state;
    }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getInfo = (state: InfoState) => state.info;
