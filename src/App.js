import React, { Fragment } from 'react';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <h1>CareerFoundry</h1>
      </Fragment>
    </Provider>
  );
}

export default App;
