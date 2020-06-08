import {all, call, put, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../../services/api';
import * as Actions from './actions';
import * as ActionsUser from '../user/actions';

function* init() {
  const item = yield call([AsyncStorage, 'getItem'], '@login:item');
  if (item) {
    const data = JSON.parse(item);
    api.defaults.headers.Authorization = `Bearer ${data.token}`;

    try {
      yield call(api.post, `sessionsVerify`, {cpf: data.user.cpf});
      yield put(ActionsUser.sendLogin(data));
      yield put(Actions.getLoginSuccess(data));
    } catch (error) {
      yield call([AsyncStorage, 'clear']);
      yield put(Actions.getLoginError());
    }
  }
  yield put(Actions.initCheckedSuccess());
}
function* getLoginSuccess({login}) {
  try {
    const {cpf, password} = login;
    const {data} = yield call(api.post, `sessions`, {cpf, password});

    yield call([AsyncStorage, 'setItem'], '@login:item', JSON.stringify(data));
    api.defaults.headers.Authorization = `Bearer ${data.token}`;
    yield put(ActionsUser.sendLogin(data));
    yield put(Actions.getLoginSuccess(data));
  } catch (error) {
    yield put(Actions.getLoginError());
  }
}

function* setLogoff() {
  yield call([AsyncStorage, 'clear']);
}

export default all([
  init(),
  takeLatest('@login/GET_REQUEST', getLoginSuccess),
  takeLatest('@login/SET_LOGOFF_SUCCESS', setLogoff),
]);
