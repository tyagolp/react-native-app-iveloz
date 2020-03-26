import produce from 'immer';
import dateFormat from 'dateformat';

const INITIAL_STATE = {
  loading: false,
  error: false,
  errorMessage: '',
  month: parseInt(dateFormat('mm')),
  year: parseInt(dateFormat('yyyy')),
  dataChart: [],
  chartPendent: true,
  item: {},
};

export default function adesao(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@adesao/SET_ADESAO_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@adesao/SET_ADESAO_SUCCESS':
      return produce(state, draft => {
        draft.item = action.payload;
        draft.loading = false;
      });
    case '@adesao/SET_ADESAO_ERROR':
      return produce(state, draft => {
        draft.loading = false;
        draft.error = true;
        draft.errorMessage = action.payload.data.description;
      });
    case '@adesao/SET_ADESAO_ERROR_OK':
      return produce(state, draft => {
        draft.error = false;
      });

    case '@adesao/SET_PLANO_REQUEST':
      return produce(state, draft => {
        draft.item.plano = action.plano;
      });

    case '@adesao/SET_FINANCEIRO_REQUEST':
      return produce(state, draft => {
        draft.item.diaVenc = action.item.diaVenc;
        draft.item.obs = action.item.obs;
      });

    case '@adesao/SET_IMAGE_SUCCESS':
      return produce(state, draft => {
        const { payload } = action;
        if (payload.local === 1) draft.item.photoBack = payload.image;
        else if (payload.local === 2) draft.item.photoFront = payload.image;
        else if (payload.local === 3) draft.item.signature = payload.image;
      });

    case '@adesao/SET_FOTO_BACK_REQUEST':
      return produce(state, draft => {
        draft.photoIndex = 1;
      });

    case '@adesao/SET_FOTO_FRONT_REQUEST':
      return produce(state, draft => {
        draft.photoIndex = 2;
      });

    case '@adesao/SET_SIGNATURE_SUCCESS':
      return produce(state, draft => {
        draft.item.signature = action.path;
      });

    case '@adesao/SET_FINAL_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@adesao/SET_FINAL_SUCCESS':
      return produce(state, draft => {
        draft.loading = false;
        draft.chartPendent = true;
      });
    case '@adesao/SET_FINAL_ERROR':
      return produce(state, draft => {
        console.tron.log(action);
        const { payload } = action;
        draft.loading = false;
        draft.error = true;
        draft.errorMessage = payload.data.description;
      });
    case '@adesao/SET_FINAL_ERROR_OK':
      return produce(state, draft => {
        draft.error = false;
        draft.errorMessage = '';
      });

    case '@adesao/GET_CHART_DATA_REQUEST':
      return produce(state, draft => {});
    case '@adesao/GET_CHART_DATA_SUCCESS':
      return produce(state, draft => {
        const { payload } = action;
        draft.chartPendent = false;
        draft.month = payload.perido.month;
        draft.year = payload.perido.year;
        draft.dataChart = payload.data;
      });

    case '@adesao/GET_CHART_DATA_ERROR':
      return produce(state, draft => {
        draft.loading = false;
        draft.error = true;
        draft.errorMessage = action.payload.data.description;
      });
    case '@adesao/GET_CHART_DATA_ERROR_OK':
      return produce(state, draft => {
        draft.error = false;
      });

    default:
      return state;
  }
}
