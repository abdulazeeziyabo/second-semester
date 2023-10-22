import { useEffect } from "react"
import { Link, useRouteError } from "react-router-dom";


const ErrorTesting = () => {
const error = useRouteError();
console.error(error);

  return (
    <div className="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            {/* <p className="error-status">{error.status}</p>
            <p className="error-status-text"><i>{error.statusText}</i></p> */}
            <p>Go to <Link to="/">Home Page</Link></p>
            </div>
  )
}

export default ErrorTesting