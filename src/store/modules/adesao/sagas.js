import {all, call, put, takeLatest} from 'redux-saga/effects';
import api from '../../../services/api';
import * as Actions from './actions';
import NavigateService from '../../../services/navigation';
import {colors} from '../../../styles';

function* setAdesaoRequest({payload}) {
  const {cpf} = payload;
  try {
    yield call(api.post, `adesao/exist`, {
      cpf,
    });
    yield put(Actions.setAdesaoSuccess(payload));
    NavigateService.navigate('Plano');
  } catch (error) {
    if (error.response) yield put(Actions.setAdesaoError(error.response));
    else
      yield put(
        Actions.setAdesaoError({
          data: {description: 'Sem conexão com a internet!'},
        }),
      );
  }
}

function* setImageRequest({payload}) {
  try {
    const {uri, name, type, local} = payload;
    const multPart = new FormData();
    multPart.append('file', {uri, name, type});
    const {data} = yield call(api.post, `files`, multPart);
    yield put(Actions.setImageSuccess({local, image: data}));
  } catch (error) {    
    if (error.response) yield put(Actions.setImageError(error.response));
    else
      yield put(
        Actions.setImageError({
          data: {description: 'Sem conexão com a internet!'},
        }),
      );
  }
}

function* setFinalRequest({item}) {
  const {
    nome,
    dataNasc,
    cpf,
    rg,
    email,
    whatsapp,
    telefone,
    cep,
    numero,
    complemento,
    diaVenc,
    plano,
    photoBack,
    photoFront,
    signature,
  } = item;

  try {
    yield call(api.post, `adesao`, {
      cliente: nome,
      data_nasc: dataNasc,
      cpf,
      rg,
      email,
      whatsapp,
      telefone,
      cep,
      numero,
      complemento,
      fk_combo: plano.id,
      dia_vencimento: diaVenc,
      foto_doc_front: photoFront.id,
      foto_doc_back: photoBack.id,
      foto_signature: signature.id,
    });
    yield put(Actions.setFinalSuccess());
    NavigateService.navigate('Final');
  } catch (error) {
    if(error.response)
    yield put(Actions.setFinalError(error.response));
    else
      yield put(
        Actions.setImageError({
          data: {description: 'Sem conexão com a internet!'},
        }),
      );
  }
}

function* getChartDataRequest({payload}) {
  const {month, year} = payload;
  try {
    const {data} = yield api.post('adesao/salesMonth', {
      month,
      year,
    });

    data.map((item) => {
      switch (item.key) {
        case 1:
          item.label = 'Espera';
          item.color = colors.secundary;
          break;
        case 2:
          item.label = 'Aceito';
          item.color = colors.buttonGreen;
          break;
        case 3:
          item.label = 'Recusado';
          item.color = colors.danger;
          break;
        default:
          break;
      }
    });

    yield put(Actions.getChartDataSuccess({data, perido: {month, year}}));
  } catch (error) {
    yield put(Actions.getChartDataErro({message: 'falha ao obter os dados'}));
  }
}

export default all([
  takeLatest('@adesao/SET_ADESAO_REQUEST', setAdesaoRequest),
  takeLatest('@adesao/SET_IMAGE_REQUEST', setImageRequest),
  takeLatest('@adesao/SET_FINAL_REQUEST', setFinalRequest),
  takeLatest('@adesao/GET_CHART_DATA_REQUEST', getChartDataRequest),
]);
