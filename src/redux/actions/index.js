export const login = 'LOGIN';

export const loggingIn = (email, password) => ({
  type: login,
  payload: {
    email,
    password,
  },
});
