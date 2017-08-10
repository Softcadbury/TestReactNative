import { takeEvery } from 'redux-saga/effects';
import { LOAD_USERS } from '../actions/types';
import { fetchUser } from './UserSaga';

export function* sagas() {
    yield takeEvery(LOAD_USERS, fetchUser);
}
