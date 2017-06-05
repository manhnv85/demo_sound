import {CONG, TRU, RESET} from '../actions/actionTypes';

export  const counter = (state = 0, action) => {
    switch (action.type) {
        case CONG:
            return state + 1;
        case TRU:
            return state -1;
        case RESET:
            return 0;
        default:
            return state;
    }
}
