import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSingleCourse, resetLoading, getLocation } from '../actions/actions';
import Spinner from './Spinner';

class SingleCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      continent: ''
    };
  }

  componentDidMount() {
    this.props.resetLoading();
    this.props.getLocation();
    this.props.getSingleCourse(window.location.pathname);
  }

  render() {
    const { current_course, continent, loading } = this.props;
    return loading ? (
      <Spinner />
    ) : (
      <Fragment>
        <div className='container-singlecourse'>
          <div className='jumbotron jumbotron-fluid jumbotron-singlecourse'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6 mt-5'>
                  <h1 className='display-4'>{current_course.description}</h1>
                  <div className='lead'>
                    {continent === 'EU'
                      ? current_course.prices
                          .filter(price => price.currency === 'eur')
                          .map(price => (
                            <div key={price.currency}>
                              <h4>Price</h4>
                              <p>
                                {price.amount} {price.currency}
                              </p>
                            </div>
                          ))
                      : current_course.prices
                          .filter(price => price.currency === 'usd')
                          .map(price => (
                            <div key={price.currency}>
                              <h4>Price</h4>
                              <p>
                                {price.amount} {price.currency}
                              </p>
                            </div>
                          ))}
                  </div>
                  <h4>Next Start Date</h4>
                  <p>
                    {current_course.start_dates
                      .filter((date, index) => index === 0)
                      .map(date => (
                        <span key={date}>{date} </span>
                      ))}
                  </p>
                  <h4>Following Start Dates</h4>
                  <p>
                    {current_course.start_dates
                      .filter((date, index) => index !== 0)
                      .map(date => (
                        <span key={date}>{date} </span>
                      ))}
                  </p>
                </div>
                <div className='col-md-6'>
                  <img
                    src='https://images.careerfoundry.com/public/frontpages/homepage/header_hp_jaye_2-min.png'
                    alt='careerfoundry'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

SingleCourse.propTypes = {
  getSingleCourse: PropTypes.func.isRequired,
  resetLoading: PropTypes.func.isRequired,
  getLocation: PropTypes.func.isRequired,
  continent: PropTypes.string.isRequired,
  current_course: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  current_course: state.courses.current_course,
  continent: state.courses.continent,
  loading: state.courses.loading
});

export default connect(mapStateToProps, {
  getSingleCourse,
  resetLoading,
  getLocation
})(SingleCourse);
