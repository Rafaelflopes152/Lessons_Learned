import { login } from '../actions';

const INITIAL_STATE = {
  email: 'alguem@alguem.com',
  password: '123456',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case login:
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
    };
  default: return state;
  }
}
export default userReducer;
