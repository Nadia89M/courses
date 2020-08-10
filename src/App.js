import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Courses from './components/Courses';
import SingleCourse from './components/SingleCourse';
import Navbar from './components/Navbar';
// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Courses} />
            <Route exact path='/:slug' component={SingleCourse} />
          </Switch>
        </Router>
      </Fragment>
    </Provider>
  );
}

export default App;
