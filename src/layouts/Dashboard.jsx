import NavBar from '../components/navbar/NavBar.jsx'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet />
    </div>
  );
}

export default Dashboard