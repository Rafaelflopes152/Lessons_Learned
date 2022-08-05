import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <WalletForm />
        {/* <h2>Wallet </h2> */}
      </div>
    );
  }
}

export default Wallet;
