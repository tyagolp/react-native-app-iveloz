import {all, call, put, takeLatest} from 'redux-saga/effects';

import api from '../../../services/api';
import * as Actions from './actions';
import NavigateService from '../../../services/navigation';

function* setUserRequest({payload}) {
  try {
    const {oldPassword, password, confirmPassword} = payload;
    const result = yield call(api.put, `users`, {
      oldPassword,
      password,
      confirmPassword,
    });

    const {data} = result;
    yield put(Actions.setUserSuccess(data));
    NavigateService.navigate('Main');
  } catch (error) {
    yield put(Actions.setUserError(error.response.data.error));
  }
}

function* setImageRequest({payload}) {
  const {uri, name, type} = payload;
  const multPart = new FormData();
  multPart.append('file', {uri, name, type});
  const {data} = yield call(api.post, `files`, multPart);

  const {data: user} = yield call(api.put, `users/avatar`, {
    avatar_id: data.id,
  });

  yield put(Actions.setImageSuccess(user));
}

export default all([
  takeLatest('@user/SET_REQUEST', setUserRequest),
  takeLatest('@user/SET_IMAGE_REQUEST', setImageRequest),
]);
