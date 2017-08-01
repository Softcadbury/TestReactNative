import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { LOAD_USERS } from '../actions/types';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
//    try {
//       const user = yield call(Api.fetchUser, action.payload.userId);
//       yield put({type: "USER_FETCH_SUCCEEDED", user: user});
//    } catch (e) {
//       yield put({type: "USER_FETCH_FAILED", message: e.message});
//    }

console.log('wow')
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* sagas() {
  //yield takeEvery(LOAD_USERS, fetchUser);
}

export default sagas;