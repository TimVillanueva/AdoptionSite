import { Client } from '@petfinder/petfinder-js'
import './App.css';
import {client} from './API_KEY'
import Header from './components/Header'
import Landing from './components/Landing'
import Footer from './components/Footer'
import Saved from './components/Saved';
import Login from './components/Login'
import { Routes, Route } from 'react-router-dom'

function App() {

    return (
      <div className="App">
          <Header/>
        <main>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path='/Saved' element={<Saved/>}/>
          <Route path="/Login" element={<Login/>}/>
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