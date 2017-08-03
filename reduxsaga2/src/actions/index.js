import { LOAD_USERS } from './types';

export const loadUsers = currentPage => {
    return {
        type: LOAD_USERS,
        currentPage: currentPage
    };
};
