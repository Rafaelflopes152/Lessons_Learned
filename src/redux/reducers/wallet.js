// import { login } from '../actions';

const INITIAL_STATE = {
  inicial: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'incial':
    return;
  default: return state;
  }
}
export default walletReducer;
