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
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
        {/* <Route path="*" component={ NotFound } /> */}
      </Switch>
      {/* <div>Hello, TrybeWallet! rrr</div> */}
    </Provider>
  );
}

export default App;
