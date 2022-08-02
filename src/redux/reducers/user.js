import { login } from '../actions';

const INITIAL_STATE = {
  email: 'alguem@alguem.com',
  senha: '123456',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case login:
    return {
      ...state,
      email: action.payload.email,
      senha: action.payload.senha,
    };
  default: return state;
  }
}
export default userReducer;
