import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const despesasTotal = 0;
const Cambio = 'BRL';

class header extends React.Component {
  render() {
    const { login } = this.props;
    return (
      <div>
        <h1>TrybeWallet!</h1>
        <ul>
          <li data-testid="email-field">
            Email:
            {' '}
            {login}
          </li>
          <li data-testid="total-field">
            Despesas Total:
            {' '}
            {despesasTotal}
          </li>
          <li data-testid="header-currency-field">
            Cambio:
            {' '}
            {Cambio}
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.user.email,
});

header.propTypes = {
  login: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(header);
