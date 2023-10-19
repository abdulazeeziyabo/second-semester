import React from 'react'
import { Outlet } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props){
    super(props);
    this.state = {hasError:false}
  }
  static getDerivedStateFromError(error){
return {hasError: true};
  }
  componentDidCatch(error, errorInfo){
console.log(error, errorInfo)
  }
  render(){
    if (this.setState.hasError){
      return <h1>Something went wrong from the error boundary. Please refresh the page</h1>;
    }
    return <Outlet />;
  }
}

export default ErrorBoundary