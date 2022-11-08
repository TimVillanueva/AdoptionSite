import React from 'react';
import {FaCat , FaDog} from 'react-icons/fa'
import {AnimalDetails} from './AnimalDetails'
import { useNavigate } from 'react-router-dom'
import {useContext} from 'react'
import {DataContext} from '../DataContext'


function FeaturedCard(props) {

    const {featuredPet, setFeaturedPet} = useContext(DataContext)
let navigate = useNavigate();

const showDetails = (id) => {
    setFeaturedPet(props.pet)
    navigate(`${id}`);
}

    if (props.pet.photos.length>0)
    {
        return (
            <div className="featured-card" onClick ={()=>showDetails(props.pet.id)}>
                <h1 className="featured-card-header">{props.pet.name}</h1>
                <div className = "featured-box">
                    <img id='featured-photo' src= {props.pet.photos[0].small}/>
                    <ul className="featured-list">
                        <li className="featured-list-item">{props.pet.type}, {props.pet.gender}</li>
                        <li className="featured-list-item">{props.pet.breeds.primary}</li>
                        <li className="featured-list-item">{props.pet.contact.address.city}, {props.pet.contact.address.state}</li>
                        <li className="featured-list-item">{props.pet.age}</li>
                    </ul>
                </div>
            </div>
        );
    }

    else if (props.pet.type === "Cat") {
    return (
        <div className="featured-card" onClick ={()=>showDetails(props.pet.id)}>
            <h1 className="featured-card-header">{props.pet.name}</h1>
            <div className = "featured-box">
                <FaCat 
                style={{fontSize:"70px",
                        position: "relative",
                        bottom: "-30px"}}/>
                <ul className="featured-list">
                    <li className="featured-list-item">{props.pet.type}, {props.pet.gender}</li>
                    <li className="featured-list-item">{props.pet.breeds.primary}</li>
                    <li className="featured-list-item">{props.pet.contact.address.city}, {props.pet.contact.address.state}</li>
                    <li className="featured-list-item">{props.pet.age}</li>
                </ul>
            </div>
        </div>
    );
    }
    else if (props.pet.type==="Dog"){
        return (
            <div className="featured-card" onClick ={()=>showDetails(props.pet.id)}>
                <h1 className="featured-card-header">{props.pet.name}</h1>
                <div className = "featured-box">
                    <FaDog 
                    style={{fontSize:"70px",
                            position: "relative",
                            bottom: "-30px"}}/>
                    <ul className="featured-list">
                        <li className="featured-list-item">{props.pet.type}, {props.pet.gender}</li>
                        <li className="featured-list-item">{props.pet.breeds.primary}</li>
                        <li className="featured-list-item">{props.pet.contact.address.city}, {props.pet.contact.address.state}</li>
                        <li className="featured-list-item">{props.pet.age}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default FeaturedCard;

