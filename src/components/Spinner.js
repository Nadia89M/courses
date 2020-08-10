import React, { Fragment } from 'react';
import spinner from '../images/spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt='Loading...' className='spinner' />
    </Fragment>
  );
};

export default Spinner;
