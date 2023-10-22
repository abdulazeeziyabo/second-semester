import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader.jsx";

function RepositoryDetails() {
  const [repository, setRepository] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [branch, setBranch] = useState([]);
  const [deploy, setDeploy] = useState({});
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const gitUrl = `https://api.github.com/repositories/${id}`;
        const token =
          "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";
        const response = await fetch(gitUrl, {
          headers:{
           Authorization:`Bearer ${token}`, 
          },
        });
        const data = await response.json();
        setRepository(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  useEffect(() => {
    (async () => {
      try {
        const gitUrl = `https://api.github.com/repositories/${id}/branches`;
        const token =
          "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";
        const response = await fetch(gitUrl, {
          headers:{
           Authorization:`Bearer ${token}`, 
          },
        });
        const data = await response.json();
        setBranch(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  useEffect(() => {
    (async () => {
      try {
        const gitUrl = `https://api.github.com/repositories/${id}/deployments`;
        const response = await fetch(gitUrl);
        const data = await response.json();
        setDeploy(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  return (
    <div className='card-repo'>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className='about-repo-wrapper'>
          <h1 className='repo-name'>{repository.name}</h1>
          <p>
            Language:{" "}
            {repository.language === null ? "None" : repository.language}
          </p>
          <p>Visibility: {repository.private ? "Private" : "Public"}</p>
          <p>Date and Time created: {repository.created_at}</p>
          <p>Branches: {branch.length}</p>
          <p className='repo-live'>
            Live site:{" "}
            {deploy.length === 0 ? (
              `none`
            ) : (
              <a href={`https://abdulazeeziyabo.github.io/${repository.name}`}>
                abdulazeeziyabo.github.io/{repository.name}
              </a>
            )}
          </p>
          <p>Stars: {repository.stargazers_count}</p>
          <p>Watch: {repository.watchers}</p>
          <p> Forks: {repository.forks}</p>
          <p>ID: {repository.id}</p>

          <Link to='/repository'>
            <button className='btn-repo'>Back to repositories</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default RepositoryDetails;
