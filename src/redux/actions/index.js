export const login = 'LOGIN';
export const CURRENCIES = 'CURRENCIES';

export const loggingIn = (email, password) => ({
  type: login,
  payload: {
    email,
    password,
  },
});

export const getCurrencies = (payload) => ({
  type: CURRENCIES,
  payload,
});

export const fetchCurrency = () => async (dispatch) => {
  const endPoint = 'https://economia.awesomeapi.com.br/json/all';
  try {
    const response = await fetch(`${endPoint}`);
    const responseJson = await response.json();
    const result = Object.keys(responseJson).map((m) => m)
      .filter((s) => (s !== 'USDT'));
    dispatch(getCurrencies(result));
    // console.log(result);
    // return result;
  } catch (error) {
    // return error;
    console.log(error);
  }
};
