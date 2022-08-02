import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    // this.isLog = this.isLog.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  state = {
    email: '',
    senha: '',
    isLogButtonDisabled: true,
    // loading: false,
    // loggedIn: false,
  }

  onInputChange({ target }) {
    const { value } = target;
    const { length } = value;
    const val = 5;
    if (length > val) {
      this.setState({ isLogButtonDisabled: false });
    } else {
      this.setState({ isLogButtonDisabled: true });
    }
  }

  render() {
    const {
      email,
      senha,
      isLogButtonDisabled,
    } = this.state;
    return (
      <form id="login">
        <h3>Login</h3>
        <hr />
        <label htmlFor="email-input">
          E-mail :
          <input
            type="email"
            name="email-input"
            data-testid="email-input"
            id="email-input"
            valueimput={ email }
          // onChange={ this.onInputChange }
          />
        </label>
        <br />
        <label htmlFor="password-input">
          Senha :
          <input
            type="password"
            name="password-input"
            data-testid="password-input"
            id="password-input"
            valueimput={ senha }
            onChange={ this.onInputChange }
          />
        </label>
        <br />
        <input
          type="button"
          value="Entrar"
          data-testid="login-submit-button"
          id="Entrar"
          disabled={ isLogButtonDisabled }
        // onClick={ this.isLog }
        />
        <hr />
      </form>);
  }
}

export default Login;
