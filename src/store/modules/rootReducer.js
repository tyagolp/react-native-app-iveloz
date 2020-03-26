import { combineReducers } from 'redux';

import login from './login/reducer';
import user from './user/reducer';
import adesao from './adesao/reducer';

export default combineReducers({
  login,
  user,
  adesao,
});
