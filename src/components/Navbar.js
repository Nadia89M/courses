import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <nav className='navbar navbar-dark'>
        <Link to='/' className='navbar-brand mb-0 h1'>
          CareerFoundry
        </Link>
      </nav>
    </Fragment>
  );
};

export default Navbar;
