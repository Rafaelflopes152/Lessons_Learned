import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import store from './redux/store';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
// import reducers from './redux/reducers';

function App() {
  return (
    <Provider store={ store }>
      {/* <div>Hello, TrybeWallet! rrr</div> */}
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
        {/* <Route path="*" component={ NotFound } /> */}
      </Switch>
    </Provider>
  );
}

export default App;
