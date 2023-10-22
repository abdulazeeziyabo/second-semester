import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-page'>
      <h1>WELCOME TO MY GITHUB PROFILE</h1>
      <a
        href='https://github.com/abdulazeeziyabo?tab=repositories'
        target='_blank'
      >
        <img
          src='/github-mark.svg'
          alt='GitHub Avatar'
          className='github-name'
        />
      </a>
      <Link to='repository' className='home-page-link'>View my repositories</Link>
      <Link to='/error-testing' className='error-testing'>
          Error Testing
        </Link>
  
      <p> &#169; AltSchool Second Semester Project 2023 <span>Created by Iyabo Abdulazeez</span></p>
    </div>
  );
}

export default Home