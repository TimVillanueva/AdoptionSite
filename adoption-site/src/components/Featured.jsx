import React from 'react';
import {API_KEY, SECRET} from '../API_KEY';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FeaturedCard from './FeaturedCard';



function Featured(props) {

//state for storing API call
const [animalData, setAnimalData] = useState([]);


useEffect(()=>{
    const getAnimalData = async () => {
        let token = await axios.post(
            'https://api.petfinder.com/v2/oauth2/token',
            `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${SECRET}`,
            {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
        );
    token = token.data.access_token;
    const response = await axios.get('https://api.petfinder.com/v2/animals', {
        params: {
            'limit': '10'
        },
        headers: {'Authorization': `Bearer ${token}`}
    });
    setAnimalData(response.data.animals)

    return response;
    }
    getAnimalData();
}, [])



    return animalData.length >0 ? (
        <div>
            <div className='featured-grid'>
        { 
        animalData.map((pet) => (
            <div key={pet.id}>
                <FeaturedCard pet={pet}/>
                
            </div>
        ))
        }
            </div>
        </div>
    ) : <h1>Loading New Best Friend...</h1>


}
export default Featured;