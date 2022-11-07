import React from 'react';
import Featured from './Featured';
import GuidedSearch from './GuidedSearch';
import {useContext, useState, useEffect} from 'react';
import { DataContext } from '../DataContext'
import {useNavigate} from 'react-router-dom'




function Landing(props) {

let navigate=useNavigate();


const TYPES = ['dog','dogs', 'cat','cats', 'rabbit','rabbits', 'small & furry', 'horse','horses', 'bird','birds', 'scales, fins, &other', 'barnyard']
const AGE = ['baby', 'young', 'adult', 'senior']
const SIZE = ['small', 'medium', 'large', 'xlarge' ]

const {searchCriteria,setSearchCriteria} = useContext(DataContext)
const temp = searchCriteria;
const resetSearch =
    temp.age= ''
    temp.breed=''
    temp.name= ''
    temp.size=''
    temp.type=''

const handleSubmit = (e) => {
    e.preventDefault();
    setSearchCriteria(resetSearch)
    let inputArr = searchCriteria.initial.split(" ")

    for (let i=0; i<inputArr.length; i++){   
        parseSearch(inputArr[i])
    }

console.log(searchCriteria)
navigate(`Search`)
}

const parseSearch = (input) => {

if (TYPES.includes(input)) {
    temp.type=input;
    setSearchCriteria(temp)
} else if (AGE.includes(input)) {
    temp.age=input
    setSearchCriteria(temp)
} else if (SIZE.includes(input) ){
    temp.size = input;
    setSearchCriteria(temp)
} else {
    temp.breed = `${input}`;
    setSearchCriteria(temp)
    // setSearchCriteria({...searchCriteria, breed: input})
}
console.log(searchCriteria)
}



    return (
        <div className="landing">
            <div className="landing-featured">
                <Featured />
            </div>
            <div className="landing-search">
                <form className = "landing-search-form" autoComplete="off" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search Pets!" id="search" 
                        value={searchCriteria.initial}
                        onChange = {(e)=>setSearchCriteria({...searchCriteria, initial:e.target.value})}
                        />
                    <input type="text" placeholder="Zip Code" id="city" 
                        value={searchCriteria.zip}
                        onChange = {(e)=>setSearchCriteria({...searchCriteria, zip: e.target.value})}
                        />
                    <input  type="submit" value="go!" id="landing-search-button"/>
                </form>
                <div className="guided-search-container">
                    <h1>Let us help you pick your purrfect pet!</h1>
                    <GuidedSearch/>
                </div> 
            </div>
        </div>
    );
}

export default Landing;

// onChange ={(e)=>props.getUsername(e.target.value)}