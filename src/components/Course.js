import React, { Fragment } from 'react';

const Course = props => {
  return (
    <Fragment>
      <div className='col-md-4 card course-card p-3 text-center'>
        <h4>{props.title}</h4>
        <p>Author: {props.author}</p>
        <p>Next Start Date: {props.next_start}</p>
        <a href={`/${props.slug}`} type='button' className='btn btn-light'>
          Discover More
        </a>
      </div>
    </Fragment>
  );
};

export default Course;
