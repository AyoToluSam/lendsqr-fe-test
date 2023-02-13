import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect, createContext, useContext } from 'react';
import moment from 'moment';
import axios from 'axios';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import UsersDetails from './pages/UserDetails/UserDetails';
import { Iuser } from './constants/types';

export const UserDetailsContext = createContext([] as Iuser[])

export const useDetails = () => {
  return useContext(UserDetailsContext);
}

const App = () => {
  
  const [usersData, setUsersData] = useState<Iuser[]>([]);
  
  //Fetching data from API at saving it into the above state
  
  const fetchUsersData = async () => {
  
    const url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"

    const response = await axios.get(url).catch(err => console.log(err));

    if (response) {
      console.log(response.data);
      setUsersData(response.data);
    }
  }

  useEffect(() => {
    fetchUsersData();
  }, [])

  //Declaring the possible statuses and generating random status
  //for users.
  //Also formatting the dates in the same array loop

  const statusArray = ["Inactive", "Pending", "Blacklisted", "Active"];
  
  const formattedData = usersData.map( (each) => {
    const date =  moment(each.createdAt).format('MMMM Do YYYY, h:mm a');
    const returnData = { ...each, ...{createdAt: date, status: statusArray[Math.floor(Math.random()*4)]}}
    return returnData
  })
  

  return (
    <UserDetailsContext.Provider value={formattedData}>
      <Routes>
        <Route path='/' element={<Login/>} ></Route>
        <Route path='/dashboard' element={<Dashboard/>} ></Route>
        <Route path='/user-details' element={<UsersDetails/>} ></Route>
      </Routes>
    </UserDetailsContext.Provider>
  )
}

export default App;
