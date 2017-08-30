/**
 * @license
 * Copyright (c) 2017, Barclays Africa Technology, All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
import { Action } from '@ngrx/store';
import { Info } from '../../model/info';

export const INFO_LOAD = '[Info] load';
export const INFO_LOAD_SUCCESS = '[Info] load success';
export const INFO_LOAD_FAIL = '[Info] load fail';

/**
 * Load Info
 */
export class InfoLoadAction implements Action {
    readonly type = INFO_LOAD;
}

/**
 * Load Info successfully
 */
export class InfoLoadSuccessAction implements Action {
    readonly type = INFO_LOAD_SUCCESS;
    /**
     * 
     * @param payload Info
     */
    constructor(public payload: Info) { }
}

/**
 * Load menu fail action
 */
export class InfoLoadFailAction implements Action {
    readonly type = INFO_LOAD_FAIL;
    /**
     * 
     * @param payload error
     */
    constructor(public payload: string) { }
  }