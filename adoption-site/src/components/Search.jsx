import React from 'react';
import {useContext, useState, useEffect} from 'react';
import {DataContext} from '../DataContext';
import axios from 'axios'
import {API_KEY, SECRET} from '../API_KEY';
import SearchCard from './SearchCard';
import {FaExclamation} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Search(props) {

let navigate = useNavigate();
const navigateHome = () => {
    navigate('/')
}

const {searchCriteria, setSearchCriteria} = useContext(DataContext)
let location= searchCriteria.zip;
location === '' ? location = "Anywhere" : location = `in ${searchCriteria.zip}`;

// const [currentSearch, setCurrentSearch] = useState([]);
const {currentSearch, setCurrentSearch} = useContext(DataContext)

useEffect(()=>{
    const getAnimalData = async () => {
        let token = await axios.post(
            'https://api.petfinder.com/v2/oauth2/token',
            `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${SECRET}`,
            {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
        );
    token = token.data.access_token;
    const response = await axios.get('https://api.petfinder.com/v2/animals/', {
        params: {
            type: searchCriteria.type,
            age: searchCriteria.age,
            breed: searchCriteria.breed,
            size: searchCriteria.size,
            location: searchCriteria.zip

        },
        headers: {'Authorization': `Bearer ${token}`}
    });
    
    setCurrentSearch(response.data.animals)
    return response;
    }
    getAnimalData();
}, [])


    return currentSearch.length>0 ? (
        <div className="search-container">
            <div className="search-header">
                <h1 style={{paddingLeft: "10px"}}>Current Filters:</h1>
                <button>Zip Code</button>
                <button>Age</button>
                <button>Type</button>
                <button>Size</button>
                <button>Breed</button>
            </div>
            <div className="search-main">
                <div className="search-advanced">
                    <h3>Advanced Search</h3>
                    <form className = "search-advanced-form">
                        <h4 style={{margin: "0"}}>Pet: </h4>
                        <select>
                            <option value = "initial">{searchCriteria.type}</option>
                        </select>
                    </form>
                </div>
                <div className="search-grid">
                    {
                        currentSearch.map((card)=>(
                            <SearchCard 
                                currentSearch = {currentSearch}
                                key = {card.id}
                                pet={card}/>
                        ))
                    }
                </div>
            </div>
        </div>
    ):  <div style={{
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    }}><h1 style ={{
        backgroundColor: "whitesmoke",
        borderRadius:"10px",
        boxShadow: "2px 2px 2px grey",
        width: "50%"
    }}> ...Loading New Friends</h1>
    <div className="login-hider"><FaExclamation style={{}}/>Help!</div>
            <div className="login-help" style={{margin: "0px 0px 100px 80px", height: "100px", }}>If this process takes longer than 10 seconds, you may need to try a new search! </div>
        <button style={{
            backgroundColor: "whitesmoke",
            borderRadius:"10px",
            boxShadow: "2px 2px 2px grey",
            width: "20%",
            position: "absolute",
            right: "600px",
            top: "250px"
        }} onClick = {navigateHome}> Return Home</button>        
    </div>
}

export default Search;