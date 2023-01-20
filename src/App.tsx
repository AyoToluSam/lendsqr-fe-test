import React from 'react';
import './App.scss';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import UsersDetails from './pages/UserDetails/UserDetails';

const App = () => {
  return (
    <div className='container'>
      <UsersDetails />
    </div>
  )
}

export default App;
