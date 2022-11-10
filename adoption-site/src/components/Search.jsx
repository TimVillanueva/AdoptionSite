import React from 'react';
import {useContext, useState, useEffect} from 'react';
import {DataContext} from '../DataContext';
import axios from 'axios'
import {API_KEY, SECRET} from '../API_KEY';
import SearchCard from './SearchCard';
import {FaExclamation} from 'react-icons/fa'
import { GiCancel} from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'
import Error from './Error';

//main search functionality
function Search(props) {

let navigate = useNavigate();
const navigateHome = () => {
    navigate('/')
}
const {filters, setFilters} = useContext(DataContext)
const {searchCriteria, setSearchCriteria} = useContext(DataContext)
const {currentSearch, setCurrentSearch} = useContext(DataContext)
const [counter, setCounter] = useState(0) //dummy to refresh API call


//main API call
//POST API Key + Secret, get token, use token to get data
useEffect(()=>{
    const getAnimalData = async () => {
        let token = await axios.post(
            'https://api.petfinder.com/v2/oauth2/token',
            `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${SECRET}`,
            {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
        );
    token = token.data.access_token;
    try{
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
    
    }catch(error){
    return (<Error/>)
    }
} 
//figure out which filters are used, store in array to display
const trimFilters = () => {
        let tempArr=[];
        for (let i=0; i<filters.length; i++){
            if (filters[i] != ''){
                tempArr.push(filters[i])
            }
        }
        setFilters(tempArr)
    }
trimFilters()
getAnimalData();
},[counter])

//use index of filter, splice, set filters to new shorter array
const removeFilter = (index) => {
    let tempArr = filters;
    let temp = searchCriteria;
    for (const item in searchCriteria)
    {

        if (searchCriteria[item] === filters[index])
        {
            temp[item] = ''
            setSearchCriteria(temp)
        }
    }

    tempArr.splice(index, 1);
    setFilters(tempArr)
    setCounter(counter=>counter+1);
}
//update filters
//reset filters to empty, fill with selections from user
const handleSubmit=(e)=>{
e.preventDefault();
setFilters(props.initialState)
setFilters([
    searchCriteria.type,
    searchCriteria.age ,
    searchCriteria.size,
    searchCriteria.breed, ])
setCounter(counter=>counter+1)

}


    return currentSearch.length>0 ? (
        // Current Filters
        <div className="search-container"> 
            <div className="search-header">
                <h1 style={{paddingLeft: "10px"}}>Current Filters:</h1> 
                {filters.map((filter, index)=>(
                    <button className = "filter-button" key={index} onClick={()=>removeFilter(index)}>{filter}<GiCancel style={{ color: "red",fontSize: "20px", position:"relative", top: "6px", left: "4px"}}/></button>
                ))}
            </div>
            <div className="search-main">
                {/* Advanced Search Menu */}
                <div className="search-advanced">
                    <h3>Advanced Search</h3>
                    <form className = "search-advanced-form" onSubmit={handleSubmit}>
                        <h4 style={{marginBottom: "10px"}}>Pet:</h4>
                        <select value={searchCriteria.type} onChange={(e)=>setSearchCriteria({...searchCriteria, type: e.target.value})}>
                            <option value="">None</option>
                            <option value="dog">Dogs</option>
                            <option value="cat">Cats</option>
                            <option value="small & furry">Pocket Pets</option>
                            <option value="horse">Horses</option>
                            <option value="bird">Bird</option>
                            <option value="scales, fins, & other">Fish and Scaled</option>
                            <option value="barnyard">Barnyard</option>
                        </select>
                        <h4 style={{marginBottom: "10px"}}>Size</h4>
                        <select value={searchCriteria.size} onChange={(e)=>setSearchCriteria({...searchCriteria, size: e.target.value})}>
                            <option value="">None</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="xlarge">X-Large</option>
                        </select>
                        <h4 style={{marginBottom: "10px"}}>Age</h4>
                        <select value={searchCriteria.age} onChange={(e)=>setSearchCriteria({...searchCriteria, age: e.target.value})}>
                            <option value="">None</option>
                            <option value="baby">Baby</option>
                            <option value="young">Young</option>
                            <option value="adult">Adult</option>
                            <option value="senior">Senior</option>
                        </select>
                        <h4 style={{marginBottom: "10px"}}>Zip Code</h4>
                        <input type="text" value ={searchCriteria.zip} onChange={(e)=>setSearchCriteria({...searchCriteria, zip: e.target.value})}></input>
                        <br/>
                        <input type="submit" value="Update Search"/>
                    </form>
                </div>
                {/* Main search grid */}
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
    ):  
    
    
    //Loading screen
    
    <div style={{
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