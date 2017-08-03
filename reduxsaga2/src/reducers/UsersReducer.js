import { LOAD_USERS, USERS_LOADED } from '../actions/types';

const INITIAL_STATE = {
    users: [],
    currentPage: 1,
    isLoading: false,
    areAllLoaded: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_USERS:
            return {
                ...state,
                isLoading: true,
                currentPage: state.currentPage + 1
            };
        case USERS_LOADED:
            return {
                ...state,
                isLoading: false,
                areAllLoaded: action.areAllLoaded,
                users: [...state.users, ...action.users]
            };
        default:
            return state;
    }
};
