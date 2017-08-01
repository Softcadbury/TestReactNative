import { LOAD_USERS } from './types';

export const loadUsers = _ => {
    return {
        type: LOAD_USERS,
        payload: 'test'
    };
};
