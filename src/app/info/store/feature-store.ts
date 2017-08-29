/**
 * @license
 * Copyright (c) 2017, Barclays Africa Technology, All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
import { ActionReducer } from '@ngrx/store';
import { createSelector } from 'reselect';

import { Info } from '../model/info';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromInfo from './reducers/info.reducer';

export interface FeatureState {
    info: fromInfo.InfoState;
}

/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
export const reducers = {
  info: fromInfo.reducer
}

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function from the reselect library creates
 * very efficient selectors that are memoized and only recompute when arguments change.
 * The created selectors can also be composed together to select different
 * pieces of state.
 */

/**
 * Just like with the projects selectors, we also have to compose the search
 * reducer's and collection reducer's selectors.
 */

export const getInfoState = (state: FeatureState) => state.info;
export const getInfo = createSelector(getInfoState, fromInfo.getInfo);