export const login = 'LOGIN';

export const logando = (email, senha) => ({
  type: login,
  payload: {
    email,
    senha,
  },
});
