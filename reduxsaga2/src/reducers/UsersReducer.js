import { LOAD_USERS } from '../actions/types';

const INITIAL_STATE = {
    test: 'test'
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_USERS:
            console.log(action.payload);
            return state;
        default:
            return state;
    }
};
