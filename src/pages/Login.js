import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loggingIn as loggingInAction } from '../redux/actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.isLog = this.isLog.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.isLogButtonDisabled = this.isLogButtonDisabled.bind(this);
  }

  state = {
    email: '',
    senha: '',
    validEmail: false,
    validPassword: false,
    loggedIn: false,
  }

  onInputChange({ target }) {
    const { value, type } = target;
    const validaEmail = /\S+@\S+\.\S+/;
    const { length } = value;
    const val = 6;
    if (type === 'email') {
      if (validaEmail.test(value)) {
        this.setState({ validEmail: true, email: value });
      } else {
        this.setState({ validEmail: false, email: value });
      }
    } else if (length >= val) {
      this.setState({ validPassword: true, senha: value });
    } else {
      this.setState({ validPassword: false, senha: value });
    }
  }

  isLogButtonDisabled() {
    const {
      validEmail,
      validPassword,
    } = this.state;
    let desabled = true;
    if (validEmail && validPassword) {
      desabled = false;
    } else {
      desabled = true;
    }
    return desabled;
  }

  isLog() {
    const {
      email,
      senha,
    } = this.state;
    const { loggingIn } = this.props;
    loggingIn(email, senha);
    this.setState({ loggedIn: true });
  }

  render() {
    const {
      email,
      senha,
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
          <button
            type="button"
            value="Entrar"
            data-testid="login-submit-button"
            id="Entrar"
            disabled={ this.isLogButtonDisabled() }
            onClick={ this.isLog }
          >
            Entrar
          </button>
          <hr />
        </form>
        {loggedIn && <Redirect to="/carteira" />}
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   login: state.user.email,
//   pass: state.user.password,
// });

const mapDispatchToProps = (dispatch) => ({
  loggingIn: (email, password) => dispatch(loggingInAction(email, password)),
});

Login.propTypes = {
  loggingIn: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
