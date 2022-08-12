import getAPI from '../../services/api';

export const LOGIN = 'LOGIN';
export const CURRENCIES = 'CURRENCIES';
export const EXPENSES = 'EXPENSES';
export const TOTAL = 'TOTAL';

export const loggingIn = (email, password) => ({
  type: LOGIN,
  payload: {
    email,
    password,
  },
});

export const getCurrencies = (payload) => ({
  type: CURRENCIES,
  payload,
});

export const getTotalExpensesBRL = (payload) => ({
  type: TOTAL,
  payload,
});

export const fetchCurrency = () => async (dispatch) => {
  const moedas = await getAPI();
  try {
    const result = Object.keys(moedas).map((m) => m)
      .filter((s) => (s !== 'USDT'));
    dispatch(getCurrencies(result));
  } catch (error) {
    console.log(error);
  }
};

export const getExpenses = (payload) => ({
  type: EXPENSES,
  payload,
});
