import * as infoReducer from './info.reducer';

import * as infoActions from '../actions/info.actions';

import { Info } from '../../model/info';

describe('Info: InfoReducer', () => {

    it('should return the default state', () => {
        const action = {} as any;

        const result = infoReducer.reducer(undefined, action);
        expect(result).toEqual(infoReducer.initialState);
    });

    it('INFO_LOAD_SUCCESS', () => {

        const info: Info = {
            "projectName": "Home",
            "projectVersion": "1.0.0"
        };

        const createAction = new infoActions.InfoLoadSuccessAction(info);

        const expectedResult: infoReducer.InfoState = {
            info: info,
        };

        const result = infoReducer.reducer(infoReducer.initialState, createAction);
        expect(result).toEqual(expectedResult);

    });

});