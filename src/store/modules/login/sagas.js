import {all, call, put, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../../services/api';
import * as Actions from './actions';
import * as ActionsUser from '../user/actions';
import * as Navigation from '../../../services/navigation';

function* init() {
  const item = yield call([AsyncStorage, 'getItem'], '@login:item');
  if (item) {
    const data = JSON.parse(item);
    api.defaults.headers.Authorization = `Bearer ${data.token}`;
    yield put(ActionsUser.sendLogin(data));
    yield put(Actions.getLoginSuccess(data));
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
    console.tron.warn(error.response);
    yield put(Actions.getLoginError());
  }
}
function* getLoginSuccessTest({login}) {
  try {
    const {cpf, password} = login;
    const data = {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTg5MjI1NTgyLCJleHAiOjE1ODk4MzAzODJ9.0gygMTSYGVr7KPeIcwf4zgETzHW4XIDG0V4bGBMgGBg',
      user: {
        id: 2,
        name: 'Tiago',
        cpf: '391.485.758-79',
        email: 'tiagoe@tiago1.com',
        avatar: {
          url:
            'http://177.125.27.78:3333/files/a36a6f0ad3b9efea56d8203f6ae8b298.png',
          id: 41,
          name: 'Dollify-0b58e798-6c43-4664-b433-d7ee5df036f5-6.png',
          path: 'a36a6f0ad3b9efea56d8203f6ae8b298.png',
        },
      },
    };
    // yield call([AsyncStorage, 'setItem'], '@login:item', JSON.stringify(data));

    api.defaults.headers.Authorization = `Bearer ${data.token}`;
    yield put(ActionsUser.sendLogin(data));
    yield put(Actions.getLoginSuccess(data));
  } catch (error) {
    console.tron.warn(error.response);
    yield put(Actions.getLoginError());
  }
}

function* setLogoff() {
  yield call([AsyncStorage, 'clear']);
}

export default all([
  init(),
  takeLatest('@login/GET_REQUEST', getLoginSuccess),
  takeLatest('@login/GET_REQUEST_TEST', getLoginSuccessTest),
  takeLatest('@login/SET_LOGOFF_SUCCESS', setLogoff),
]);
