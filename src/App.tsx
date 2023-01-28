import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import UsersDetails from './pages/UserDetails/UserDetails';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>} ></Route>
      <Route path='/dashboard' element={<Dashboard/>} ></Route>
      <Route path='/user-details' element={<UsersDetails/>} ></Route>
    </Routes>
  )
}

export default App;
