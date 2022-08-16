import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
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
                {/* { console.log(d.exchangeRates[d.currency].ask)} */}
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
                  // onClick={  }
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
}.isRequired;

const mapStateToProps = (state) => ({
  despesas: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
