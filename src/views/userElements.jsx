import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader.jsx";
import ErrorTesting from "../components/ErrorTesting.jsx";

function UserElements() {
  const [userElements, setUserElements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const gitUrl = `https://api.github.com/users/abdulazeeziyabo/repos`
        const response = await fetch(gitUrl);
        const data = await response.json();
        setUserElements(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleShowMore = (id) => {
    console.log(id);
    navigate(`/repository/${id}`); 
  };

  return (
    <div className='wrapper-repo'>
      <div className='header-repo'>
        <div className='github-name'>My GitHub Repositories</div>
      </div>
      {isLoading && !error && <Loader />}
      {error && <ErrorTesting error={error} />}
      {!isLoading && (
        <>
          {userElements.map((userElement) => (
            <div className='card-repo' key={userElement.id}>
              <h3 className='element-repo'>{userElement.name}</h3>
              <div className='repo-btns'>
                <button
                  className='btn-repo'
                  onClick={() => handleShowMore(userElement.id)} 
                >
                  Show More
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
