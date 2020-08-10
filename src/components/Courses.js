import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCourses } from '../actions/actions';
import Course from './Course';

class Courses extends Component {
  componentDidMount() {
    this.props.getCourses();
  }

  render() {
    const { courses } = this.props;
    return (
      <div>
        <div className='container'>
          <h1 className='text-center mt-5'>Courses</h1>
          <div className='row mt-5 p-5'>
            {courses.map(course => (
              <Course
                key={course.slug}
                slug={course.slug}
                title={course.title}
                author={course.author}
                next_start={course.next_start_formatted}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Courses.propTypes = {
  getCourses: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  courses: state.courses.courses
});

export default connect(mapStateToProps, { getCourses })(Courses);
