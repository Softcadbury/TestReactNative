import { call, put } from 'redux-saga/effects';
import { USERS_LOADED } from '../actions/types';

function fetchUserAPI(currentPage) {
    return fetch('https://reqres.in/api/users?page=' + currentPage).then(response => response.json());
}

export function* fetchUser(action) {
    const response = yield call(fetchUserAPI, action.currentPage);

    yield put({
        type: USERS_LOADED,
        users: response.data,
        areAllLoaded: action.currentPage == response.total_pages
    });
}
