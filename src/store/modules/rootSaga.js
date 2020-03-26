import { all } from 'redux-saga/effects';

import login from './login/sagas';
import user from './user/sagas';
import adesao from './adesao/sagas';

export default function* rootSaga() {
  return yield all([login, user, adesao]);
}
