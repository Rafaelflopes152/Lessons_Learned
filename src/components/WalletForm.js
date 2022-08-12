import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency, getExpenses, getTotalExpensesBRL } from '../redux/actions';
import getAPI from '../services/api';

const initialState = {
  value: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  description: '',
};

class WalletForm extends React.Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.isAddExpense = this.isAddExpense.bind(this);
    this.resetInput = this.resetInput.bind(this);
    this.state = initialState;
  }

  state = {
    value: '',
    currency: '',
    method: '',
    tag: '',
    description: '',
  }

  componentDidMount() {
    const { dispatchCurrencies } = this.props;
    dispatchCurrencies();
  }

  onInputChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  resetInput() {
    // referencia do reset state https://stackoverflow.com/questions/34845650/clearing-state-es6-react
    const keys = Object.keys(this.state);
    const stateReset = keys.reduce((acc, v) => ({ ...acc, [v]: undefined }), {});
    this.setState({ ...stateReset, ...initialState });
  }

  async isAddExpense() {
    const { includExpenses, totalExpenses } = this.props;
    const { value, currency } = this.state;
    const moedas = await getAPI();
    const { ask } = moedas[currency];
    const vBRL = Number(value) * Number(ask);
    // // const testes = Object.entries(moedas).map((m) => m);
    // console.log(vBRL, currency, ask);
    this.setState({ exchangeRates: moedas });
    includExpenses(this.state);
    totalExpenses(vBRL);
    this.resetInput();
  }

  render() {
    const { currencies } = this.props;
    const {
      value,
      currency,
      method,
      tag,
      description,
    } = this.state;
    return (
      <div id="WalletForm">
        WalletForm
        <form>
          <label htmlFor="value-input">
            valor:
            <input
              type="number"
              name="value"
              data-testid="value-input"
              id="value-input"
              valueimput={ value }
              onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="description-input">
            Descrição:
            <input
              type="text"
              name="description"
              data-testid="description-input"
              id="description-input"
              valueimput={ description }
              onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="currency-input">
            Moeda:
            <select
              name="currency"
              data-testid="currency-input"
              id="currency-input"
              valueimput={ currency }
              onChange={ this.onInputChange }
            >
              {currencies && currencies.map((moedas, i) => (
                <option value={ moedas } key={ i }>
                  { moedas }
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="method-input">
            Método pgto:
            <select
              name="method"
              data-testid="method-input"
              id="method-input"
              valueimput={ method }
              onChange={ this.onInputChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag-input">
            Categoria (tag):
            <select
              name="tag"
              data-testid="tag-input"
              id="tag-input"
              valueimput={ tag }
              onChange={ this.onInputChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button
            type="reset"
            onClick={ this.isAddExpense }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatchCurrencies: PropTypes.func.isRequired,
  includExpenses: PropTypes.func.isRequired,
  totalExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrencies: () => dispatch(fetchCurrency()),
  includExpenses: (payload) => dispatch(getExpenses(payload)),
  totalExpenses: (payload) => dispatch(getTotalExpensesBRL(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
