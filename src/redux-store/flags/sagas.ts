import { all, takeLatest } from '@redux-saga/core/effects';

import { RESET_ALL_FLAGS } from './constants';

function* resetAllFlagsSaga() {
  console.log('resetAllFlagsSaga.............');
}

export default function* registrationSaga() {
  yield all([takeLatest(RESET_ALL_FLAGS, resetAllFlagsSaga)]);
}
