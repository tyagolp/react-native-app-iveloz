export function setAdesaoRequest(payload) {
  return {
    type: '@adesao/SET_ADESAO_REQUEST',
    payload,
  };
}
export function setAdesaoSuccess(payload) {
  return {
    type: '@adesao/SET_ADESAO_SUCCESS',
    payload,
  };
}
export function setAdesaoError(payload) {
  return {
    type: '@adesao/SET_ADESAO_ERROR',
    payload,
  };
}
export function setAdesaoErrorOk() {
  return {
    type: '@adesao/SET_ADESAO_ERROR_OK',
  };
}

export function setPlanoRequest(plano) {
  return {
    type: '@adesao/SET_PLANO_REQUEST',
    plano,
  };
}
export function setFinanceiroRequest(item) {
  return {
    type: '@adesao/SET_FINANCEIRO_REQUEST',
    item,
  };
}

export function setImageRequest(payload) {
  return {
    type: '@adesao/SET_IMAGE_REQUEST',
    payload,
  };
}
export function setImageSuccess(payload) {
  return {
    type: '@adesao/SET_IMAGE_SUCCESS',
    payload,
  };
}
export function setImageError(payload) {
  return {
    type: '@adesao/SET_IMAGE_ERROR',
    payload,
  };
}

export function setSignatureSuccess(path) {
  return {
    type: '@adesao/SET_SIGNATURE_SUCCESS',
    path,
  };
}

export function setFinalRequest(item) {
  return {
    type: '@adesao/SET_FINAL_REQUEST',
    item,
  };
}
export function setFinalSuccess(payload) {
  return {
    type: '@adesao/SET_FINAL_SUCCESS',
    payload,
  };
}
export function setFinalError(payload) {
  return {
    type: '@adesao/SET_FINAL_ERROR',
    payload,
  };
}
export function setFinalErrorOk() {
  return {
    type: '@adesao/SET_FINAL_ERROR_OK',
  };
}

export function getChartDataRequest(payload) {
  return {
    type: '@adesao/GET_CHART_DATA_REQUEST',
    payload,
  };
}
export function getChartDataSuccess(payload) {
  return {
    type: '@adesao/GET_CHART_DATA_SUCCESS',
    payload,
  };
}
export function getChartDataErro(payload) {
  return {
    type: '@adesao/GET_CHART_DATA_Erro',
    payload,
  };
}
export function getChartDataErroOk(payload) {
  return {
    type: '@adesao/GET_CHART_DATA_Erro_OK',
    payload,
  };
}
