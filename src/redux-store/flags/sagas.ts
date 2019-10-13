import { all, takeLatest } from '@redux-saga/core/effects';

import { GOING_TO_ROUTE } from './constants';

function* switchRouteSaga() {
  console.log('switchRouteSaga.............');
}

export default function* registrationSaga() {
  yield all([takeLatest(GOING_TO_ROUTE, switchRouteSaga)]);
}
