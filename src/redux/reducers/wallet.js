import { CURRENCIES, EXPENSES, TOTAL, EXCLUDE_EXPENSES, SUBTOTAL } from '../actions';

export const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
  idToNext: 0, // valor numérico que armazena o id da proxima despesa
  totalExpensesBRL: 0, // valor das despesas
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, { id: state.idToNext, ...action.payload }],
      totalExpensesBRL: state.totalExpensesBRL + (Number(action.payload.value)
      * Number(action.payload.exchangeRates[action.payload.currency].ask)),
      idToNext: state.idToNext + 1,
    };
  case TOTAL:
    return {
      ...state,
      totalExpensesBRL: state.totalExpensesBRL + action.payload,
    };
  case EXCLUDE_EXPENSES:
    return {
      ...state,
      expenses: action.payload,
    };
  case SUBTOTAL:
    return {
      ...state,
      totalExpensesBRL: (state.totalExpensesBRL - action.payload),
      idToNext: state.idToNext - 1,
    };
  default:
    return state;
  }
}
export default walletReducer;
