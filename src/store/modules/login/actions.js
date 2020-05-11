export function initCheckedSuccess() {
  return {
    type: '@login/INIT_CHECKED_SUCCESS',
  };
}
export function setLogoffSuccess() {
  return {
    type: '@login/SET_LOGOFF_SUCCESS',
  };
}

export function getLoginRequest(login) {
  return {
    type: '@login/GET_REQUEST',
    login,
  };
}
export function getLoginTestRequest(login) {
  return {
    type: '@login/GET_REQUEST_TEST',
    login,
  };
}
export function getLoginSuccess(login) {
  return {
    type: '@login/GET_SUCCESS',
    login,
  };
}
export function getLoginError() {
  return {
    type: '@login/GET_ERROR',
  };
}

export function setLoginRequest(payload) {
  return {
    type: '@login/SET_REQUEST',
    payload,
  };
}
export function setLoginSuccess(payload) {
  return {
    type: '@login/SET_SUCCESS',
    payload,
  };
}
export function setLoginError(payload) {
  return {
    type: '@login/SET_ERROR',
    payload,
  };
}

export function setImageRequest(payload) {
  return {
    type: '@login/SET_IMAGE_REQUEST',
    payload,
  };
}
export function setImageSuccess(payload) {
  return {
    type: '@login/SET_IMAGE_SUCCESS',
    payload,
  };
}
