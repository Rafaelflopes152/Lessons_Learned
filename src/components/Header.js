import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Cambio = 'BRL';

class header extends React.Component {
  render() {
    const { login, depesasTotal } = this.props;
    return (
      <div align="center">
        <h1>TrybeWallet!</h1>
        <hr />
        <div align="center">
          <p data-testid="email-field">
            Email:
            {' '}
            {login}
          </p>
          <p>
            Despesas Total:
            <div data-testid="total-field">
              {Math.abs(depesasTotal).toFixed(2)}
            </div>
          </p>
          <p data-testid="header-currency-field">
            Cambio:
            {' '}
            {Cambio}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  despesas: state.wallet.expenses,
  login: state.user.email,
  depesasTotal: state.wallet.totalExpensesBRL,
});

header.propTypes = {
  despesas: PropTypes.array,
  login: PropTypes.string,
  depesasTotal: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(header);
