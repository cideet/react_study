/**
 * Created by Administrator on 2017/9/4 0004.
 */

import * as actionTypes from '../constants/index.jsx';

const initialState = {};

export default function userinfo(state = initialState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_LOGIN:
            return action.data;
        case actionTypes.UPDATE_CITYNAME:
            return action.data;
        default:
            return state;
    }
}
