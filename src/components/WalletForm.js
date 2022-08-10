import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency } from '../redux/actions';

class WalletForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.fetchCurrency = this.fetchCurrency.bind(this);
  // }

  componentDidMount() {
    const { dispatchCurrencies } = this.props;
    dispatchCurrencies();
  }

  render() {
    const { currencies } = this.props;
    // const moedas = this.fetchCurrency();
    return (
      <div id="WalletForm">
        WalletForm
        {console.log(currencies)}
        {/* {this.fetchCurrency()} */}
        <form>
          <label htmlFor="value-input">
            valor:
            <input
              type="number"
              name="value-input"
              data-testid="value-input"
              id="value-input"
              // valueimput={ senha }
              // onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="description-input">
            Descrição:
            <input
              type="text"
              name="description-input"
              data-testid="description-input"
              id="description-input"
              // valueimput={ senha }
              // onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="currency-input">
            Moeda:
            <select
              name="currency-input"
              data-testid="currency-input"
              id="currency-input"
              // valueimput={ senha }
              // onChange={ this.onInputChange }
            >
              {currencies && currencies.map((m, i) => (
                <option value={ m } key={ i }>
                  { m }
                </option>
              ))}
              {/* <option value="Dinheiro">Dinheiro</option> */}
            </select>
          </label>
          <label htmlFor="method-input">
            Método pgto:
            <select
              name="method-input"
              data-testid="method-input"
              id="method-input"
              // valueimput={ senha }
              // onChange={ this.onInputChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="CartaoCredito">Cartão de crédito</option>
              <option value="CartaoDebito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag-input">
            Categoria (tag):
            <select
              name="tag-input"
              data-testid="tag-input"
              id="tag-input"
              // valueimput={ senha }
              // onChange={ this.onInputChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatchCurrencies: PropTypes.func.isRequired,
  // dispatchExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrencies: () => dispatch(fetchCurrency()),
  // dispatchExpense: (payload) => dispatch(addExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
