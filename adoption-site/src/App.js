import './App.css';
import react from 'react';
import axios from 'axios'
import {API_KEY, SECRET} from './API_KEY';
import Header from './components/Header'
import Landing from './components/Landing'
import Footer from './components/Footer'
import Saved from './components/Saved';
import Login from './components/Login'
import LogOut from './components/LogOut'
import Search from './components/Search'
import AnimalDetails from './components/AnimalDetails';
import { Routes, Route } from 'react-router-dom'
import {useState, useEffect, useContext} from 'react'
import { DataContext } from './DataContext';


function App() {
const initialState = {
  initial: '',
  zip: '',
  type:'',
  breed:'',
  age:'',
  size:'',
  name:'',
}
const [searchCriteria, setSearchCriteria] = useState(initialState)
const [currentSearch, setCurrentSearch] = useState([])
const [featuredPet, setFeaturedPet] = useState(null)
const [saved, setSaved] = useState([]);
const [logInStatus, setLogInStatus] = useState(false);
const [username, setUsername] = useState('');
const [filters, setFilters] = useState([])


const getLogInStatus = () => {
  if (logInStatus)
  { 
    setUsername("")
    setLogInStatus(false) 
  }else{ 
    setLogInStatus(true)
  }
}

const getUsername = (input) =>{
  setUsername(input)
}

    return (
    <DataContext.Provider value={{searchCriteria, setSearchCriteria, 
                                  currentSearch, setCurrentSearch, 
                                  featuredPet, setFeaturedPet,
                                  saved, setSaved,
                                  filters, setFilters
                                }}>
      <div className="App">
          <Header logInStatus= {logInStatus} username={username} initialState={initialState}/>
        <main>
        <Routes>
          <Route path="/" element={<Landing initialState={initialState}/>} />
          <Route path='/Saved' element={<Saved/>}/>
          <Route path="/Login" element={<Login getLogInStatus={getLogInStatus} username={username} getUsername= {getUsername}/>}/>
          <Route path="/LogOut" element={<LogOut getLogInStatus={getLogInStatus}/>}/>
          <Route path = "Search/:id" element={<AnimalDetails/>}/>
          <Route path="/Search" element={<Search/>}/>
          <Route path="/:id" element = {<AnimalDetails/>}/>
          <Route path="/Saved/:id" element={<AnimalDetails/>}/>
        </Routes>
        </main>
      
          <Footer/>
      </div>
    </DataContext.Provider>
    );
  }
  
  export default App;
  
  

  // const [test, setTest] = useState([]);

  // useEffect(()=>{
  //   const getAnimalData = async () => {
  //       let token = await axios.post(
  //           'https://api.petfinder.com/v2/oauth2/token',
  //           `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${SECRET}`,
  //           {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
  //       );
  //   token = token.data.access_token;
  //   const response = await axios.get('https://api.petfinder.com/v2/animals/', {
  //       params: {
  //           breed: "pug,samoyed"
  //       },
  //       headers: {'Authorization': `Bearer ${token}`}
  //   });
  //   console.log(response)
  //   // setTest(response.data.animals)
  //   return response;
  //   }
  //   getAnimalData();
  // }, [])

