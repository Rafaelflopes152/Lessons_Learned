import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Cambio = 'BRL';

class header extends React.Component {
  render() {
    const { login, depesasTotal } = this.props;
    return (
      <div>
        <h1>TrybeWallet!</h1>
        <hr />
        <div>
          <p data-testid="email-field">
            Email:
            {' '}
            {login}
          </p>
          <p>
            Despesas Total:
          </p>
          <p data-testid="total-field">
            {depesasTotal.toFixed(2)}
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
  login: state.user.email,
  depesasTotal: state.wallet.totalExpensesBRL,
});

header.propTypes = {
  login: PropTypes.string.isRequired,
  depesasTotal: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(header);
