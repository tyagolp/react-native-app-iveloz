import produce from 'immer';

const INITIAL_STATE = {
  error: false,
  errorMessage: null,
  loading: false,
  item: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@user/SEND_LOGIN':
      return produce(state, draft => {
        draft.item = action.payload.user;
      });

    case '@user/SET_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
        draft.error = false;
        draft.errorMessage = false;
      });
    case '@user/SET_SUCCESS':
      return produce(state, draft => {
        draft.login = action.login;
        draft.loading = false;
        draft.error = false;
        draft.errorMessage = false;
      });
    case '@user/SET_ERROR':
      return produce(state, draft => {
        draft.loading = false;
        draft.error = true;
        draft.errorMessage = action.payload;
      });
    case '@user/SET_ERROR_OK':
      return produce(state, draft => {
        draft.error = false;
      });

    case '@user/SET_IMAGE_SUCCESS':
      return produce(state, draft => {
        draft.item = action.payload;
      });

    default:
      return state;
  }
}
