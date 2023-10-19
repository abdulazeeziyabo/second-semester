import React from "react";
import { Link } from "react-router-dom";
import  './notfound.css';

const NotFound = () => {
  return (
    <>
      <div className="container-notfound">
        <h1 className='header-notfound'>404 - Page Not Found</h1>
        <Link to='/'>
          <button className='btn-notfound'>Back to Repo page</button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
