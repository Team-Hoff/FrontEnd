import React from 'react';
import './PageNotFound.css';
import {Link} from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className = "whole">
      <div className = "Button">
        <Link className= "link" to="/home"><button>HomePage</button></Link>
      </div>
    </div>
  )
}

export default PageNotFound