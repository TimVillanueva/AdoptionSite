import './App.css';
import Header from './components/Header'
import Landing from './components/Landing'
import Footer from './components/Footer'
import Saved from './components/Saved';
import Login from './components/Login'
import LogOut from './components/LogOut'
import { Routes, Route } from 'react-router-dom'
import {useState} from 'react'

function App() {

const [logInStatus, setLogInStatus] = useState(false);
const getLogInStatus = () => {
  logInStatus ? setLogInStatus(false) : setLogInStatus(true)
}

    return (
      <div className="App">
          <Header logInStatus= {logInStatus}/>
        <main>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path='/Saved' element={<Saved/>}/>
          <Route path="/Login" element={<Login getLogInStatus={getLogInStatus} />}/>
          <Route path="/LogOut" element={<LogOut getLogInStatus={getLogInStatus}/>}/>
        </Routes>
        </main>
          <Footer/>
      </div>
    );
  }
  
  export default App;
  
  
  //client.animalData.types() -- gets animal types
  //client.animalData.breeds('dog') -- get animal breeds by type
  //client.animal.search() -- array of 200 animals
  //client.animal.search({ -- more specific search results 
  //   type:"Dog",
  //   breed:"Labrador-Retriever",
  //   page:1,
  //   limit:100,
  // })
  //client.animal.show(12345) -- animal by ID
  //client.organization.search({location: "Minneapolis, MN"}) -- organizations by area


  {/* <img src={require('../Photos/stockCat.jpeg')}/> */}