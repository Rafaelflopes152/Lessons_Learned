import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { excludeExpenses, subtractionTotal } from '../redux/actions';

class Table extends Component {
  constructor(props) {
    super(props);
    this.isRemoveExpense = this.isRemoveExpense.bind(this);
  }

  isRemoveExpense({ target }) {
    const {
      despesas,
      removeExpenses,
      subtraiTotal,
    } = this.props;
    const { id } = target;
    const despesasAtual = despesas.filter((e) => (e.id !== Number(id)));
    const despesa = despesas.filter((e) => (e.id === Number(id)))[0];
    const { value, exchangeRates, currency } = despesa;
    subtraiTotal((Number(value)
    * Number(exchangeRates[currency].ask)));
    removeExpenses(despesasAtual);
  }

  render() {
    const { despesas } = this.props;
    return (
      <table border="2" align="center">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody align="center">
          {despesas.map((d) => (
            <tr key={ d.id }>
              <td>
                {d.description}
              </td>
              <td>{d.tag}</td>
              <td>{d.method}</td>
              <td>{Number(d.value).toFixed(2)}</td>
              <td>{d.exchangeRates[d.currency].name}</td>
              <td>{Number(d.exchangeRates[d.currency].ask).toFixed(2)}</td>
              <td>
                {(Number(d.exchangeRates[d.currency].ask) * Number(d.value)).toFixed(2)}
              </td>
              <td>{d.exchangeRates.XRP.name}</td>
              <td>
                <button
                  data-testid="edit-btn"
                  type="button"
                  id={ d.id }
                  // onClick={ }
                >
                  Editar
                </button>
                <button
                  data-testid="delete-btn"
                  type="button"
                  id={ d.id }
                  onClick={ this.isRemoveExpense }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  despesas: PropTypes.array,
  depesasTotal: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  despesas: state.wallet.expenses,
  depesasTotal: state.wallet.totalExpensesBRL,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpenses: (payload) => dispatch(excludeExpenses(payload)),
  subtraiTotal: (payload) => dispatch(subtractionTotal(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
