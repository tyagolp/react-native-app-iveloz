import produce from 'immer';

const INITIAL_STATE = {
  authChecked: false,
  error: false,
  errorMessage: null,
  signed: false,
  loading: false,
  login: [],
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@login/INIT_CHECKED_SUCCESS':
      return produce(state, draft => {
        draft.authChecked = true;
      });

    case '@login/SET_LOGOFF_SUCCESS':
      return produce(state, draft => {
        draft.authChecked = true;
        draft.errorMessage = null;
        draft.signed = false;
        draft.loading = false;
        draft.login = [];
      });

    case '@login/GET_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
        draft.error = false;
        draft.signed = false;
      });
    case '@login/GET_SUCCESS':
      return produce(state, draft => {
        draft.login = action.login;
        draft.signed = true;
        draft.error = false;
        draft.loading = false;
      });
    case '@login/GET_ERROR':
      return produce(state, draft => {
        draft.signed = false;
        draft.error = true;
        draft.loading = false;
      });

    case '@login/SET_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
        draft.error = false;
        draft.errorMessage = false;
      });
    case '@login/SET_SUCCESS':
      return produce(state, draft => {
        draft.login = action.login;
        draft.loading = false;
        draft.error = false;
        draft.errorMessage = false;
      });
    case '@login/SET_ERROR':
      return produce(state, draft => {
        draft.loading = false;
        draft.error = true;
        draft.errorMessage = action.payload.data;
      });

    default:
      return state;
  }
}
