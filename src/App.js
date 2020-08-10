import React, { Fragment } from 'react';
import './App.css';
import Courses from './components/Courses';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Courses />
      </Fragment>
    </Provider>
  );
}

export default App;
