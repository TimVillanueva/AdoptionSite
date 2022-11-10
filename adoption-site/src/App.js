import './App.css';
import Header from './components/Header'
import Landing from './components/Landing'
import Footer from './components/Footer'
import Saved from './components/Saved';
import Login from './components/Login'
import LogOut from './components/LogOut'
import Search from './components/Search'
import AnimalDetails from './components/AnimalDetails';
import { Routes, Route } from 'react-router-dom'
import {useState} from 'react'
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
    //list of all items sent through useContext
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
          <Route path="/Search" element={<Search initialState={initialState}/>}/>
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