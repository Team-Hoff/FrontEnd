import React from 'react';
import './PageNotFound.css';
import {Link} from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
        <h1>Error 404</h1>
        <h2>Page Not Found</h2>
        <Link to="/home">Back to homepage</Link>
    </div>
  )
}

export default PageNotFound