import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor() {
    super();
    this.isLog = this.isLog.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  state = {
    email: '',
    senha: '',
    validEmail: false,
    validPassword: false,
    isLogButtonDisabled: true,
    loggedIn: false,
  }

  onInputChange({ target }) {
    const {
      validEmail,
      validPassword,
    } = this.state;
    const { value, type } = target;
    const validaEmail = /\S+@\S+\.\S+/;
    const { length } = value;
    const val = 5;
    if (type === 'email') {
      if (validaEmail.test(value)) {
        this.setState({ validEmail: true, email: value });
      }
    } else if (length > val) {
      this.setState({ validPassword: true, senha: value });
    }

    if (validEmail && validPassword) {
      this.setState({ isLogButtonDisabled: false });
    } else {
      this.setState({ isLogButtonDisabled: true });
    }
  }

  isLog() {
    const {
      email,
      senha,
      loggedIn,
    } = this.state;
    const { login, pass } = this.props;
    if (email === login) {
      console.log('oi');
      this.setState({ loggedIn: true });
    }
    console.log(email, senha, loggedIn);
    console.log(login, pass);
  }

  render() {
    const {
      email,
      senha,
      isLogButtonDisabled,
      loggedIn,
    } = this.state;
    return (
      <div>
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
              onChange={ this.onInputChange }
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
            onClick={ this.isLog }
          />
          <hr />
        </form>
        {loggedIn && <Redirect to="/carteira" />}
      </div>
    );
  }
}

// Login.propTypes = {
//   usuario: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
// };

const mapStateToProps = (state) => ({
  login: state.user.email,
  pass: state.user.password,
});

// const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, null)(Login);
