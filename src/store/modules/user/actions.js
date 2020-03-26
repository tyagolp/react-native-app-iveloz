export function sendLogin(payload) {
  return {
    type: '@user/SEND_LOGIN',
    payload,
  };
}

export function setUserRequest(payload) {
  return {
    type: '@user/SET_REQUEST',
    payload,
  };
}
export function setUserSuccess(payload) {
  return {
    type: '@user/SET_SUCCESS',
    payload,
  };
}
export function setUserError(payload) {
  return {
    type: '@user/SET_ERROR',
    payload,
  };
}
export function setUserErrorOk() {
  return {
    type: '@user/SET_ERROR_OK',
  };
}

export function setImageRequest(payload) {
  return {
    type: '@user/SET_IMAGE_REQUEST',
    payload,
  };
}
export function setImageSuccess(payload) {
  return {
    type: '@user/SET_IMAGE_SUCCESS',
    payload,
  };
}
