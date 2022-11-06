import React from 'react';
import {useContext, useState, useEffect} from 'react';
import {DataContext} from '../DataContext';
import axios from 'axios'
import {API_KEY, SECRET} from '../API_KEY';
import SearchCard from './SearchCard';

function Search(props) {

const {searchCriteria, setSearchCriteria} = useContext(DataContext)
let location = searchCriteria.city + searchCriteria.state
let temp= searchCriteria;
location === '' ? location = "Anywhere" : location = `in ${searchCriteria.city}, ${searchCriteria.state}`;

// if(temp.type === ''){
//     temp.type = "any"
//     setSearchCriteria(temp)
// }
// if(temp.age === ''){
//     temp.age = "any"
//     setSearchCriteria(temp)
// } 
// if(temp.breed === ''){
//     temp.breed = "any"
//     setSearchCriteria(temp)
// } 
// if(temp.size === ''){
//     temp.size = "any"
//     setSearchCriteria(temp)
// } 

const [currentSearch, setCurrentSearch] = useState([]);


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
        },
        headers: {'Authorization': `Bearer ${token}`}
    });
    console.log(response.data.animals)
    setCurrentSearch(response.data.animals)
    return response;
    }
    getAnimalData();
}, [])


    return (
        <div className="search-container">
            <div className="search-header">
                <h1>You Searched for "{searchCriteria.initial}" {location}</h1>
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
                            <SearchCard/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Search;