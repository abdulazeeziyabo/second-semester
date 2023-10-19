import {FaGithub} from 'react-icons/fa'
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader.jsx";
import ErrorTesting from "../components/ErrorTesting.jsx";

function UserElements() {
  const [userElements, setUserElements] = useState([]);
  const[isLoading, setIsLoading]= useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    (async () => {
      try {
        const gitUrl = `https://api.github.com/users/abdulazeeziyabo/repos`;
        const response = await fetch(gitUrl);
        const data = await response.json();
        setUserElements(data);
      } catch (error) {
        console.log(error);
      }finally{
        setIsLoading(false)
      }
    })();
  }, []);

  const handleShowMore = (id) => {
    navigate(`repository/${id}`);
  };

  return (
    <div className='wrapper-repo'>
      <div className='header-repo'>
        <FaGithub className='github-icon' />
        <div className='github-name'>My GitHub Repositories</div>
      </div>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          {userElements.map((userElement) => (
            <div className='card-repo' key={userElement.id}>
              <h3 className='element-repo'>{userElement.name}</h3>
              <div className='repo-btns'>
                <button
                  onClick={() => handleShowMore(userElement.id)}
                  className='btn-repo'
                >
                  Show More
                </button>
                <button className='btn-repo'>
                  <Link to='/error-testing' className='error-testing'>
                    Error Testing
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default UserElements;
