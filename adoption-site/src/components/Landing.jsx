import React from 'react';
import Featured from './Featured';
import GuidedSearch from './GuidedSearch';
import {useContext, useState, useEffect} from 'react';
import { DataContext } from '../DataContext'
import {useNavigate} from 'react-router-dom'

function Landing(props) {

let navigate=useNavigate();


const TYPES = ['dog', 'cat', 'rabbit', 'small & furry', 'horse', 'bird', 'scales, fins, & other', 'barnyard']
const AGE = ['baby', 'young', 'adult', 'senior']
const SIZE = ['small', 'medium', 'large', 'xlarge' ]
const dogAlt = ['dogs','puppy', 'puppies']
const catAlt= ['cats','kitten', 'kittens'
]

const {searchCriteria,setSearchCriteria} = useContext(DataContext)
const {featuredPet, setFeaturedPet}= useContext(DataContext);
const {filters, setFilters} = useContext(DataContext)
const temp = searchCriteria;


const resetSearch = {
    age: '',
    breed: '',
    name: '',
    size: '',
    type:'',
    initial: '',
    zip:'',
}

const onLoad = () => {
    setSearchCriteria(resetSearch)
    setFeaturedPet(null)
    setFilters([])
}

const handleSubmit = (e) => {
    e.preventDefault();
    if (searchCriteria.zip === ''){
        alert('Please Enter A Zip Code!')
        navigate(`/`)
    } else {
    let inputArr = searchCriteria.initial.split(" ")

    for (let i=0; i<inputArr.length; i++){   
        parseSearch(inputArr[i])
    }
    setFilters([...filters,
        searchCriteria.type,
        searchCriteria.age,
        searchCriteria.size,
        searchCriteria.breed, ])
navigate(`Search`)
    }
}

const parseSearch = (input) => {

if (TYPES.includes(input) || dogAlt.includes(input)|| catAlt.includes(input)) {
    if (dogAlt.includes(input)){
        temp.type='dog';

    setSearchCriteria(temp)
    } else if (catAlt.includes(input)){
        temp.type='cat';
        setSearchCriteria(temp)
    }else{
    temp.type=input;
    setSearchCriteria(temp)
    }
} else if (AGE.includes(input)) {
    temp.age=input
    setSearchCriteria(temp)
} else if (SIZE.includes(input) ){
    temp.size = input;
    setSearchCriteria(temp)
} else {
    temp.breed = `${input}`;
    setSearchCriteria(temp)
}}

return (
        <div className="landing" onLoad={onLoad}>
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