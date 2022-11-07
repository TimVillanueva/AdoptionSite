import React from 'react';
import {useContext, useState, useEffect} from 'react';
import {DataContext} from '../DataContext'
import {useParams } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { AiOutlineHeart } from 'react-icons/ai'


function AnimalDetails(props) {

let {id} = useParams()
const {currentSearch, setCurrentSearch} = useContext(DataContext)
const {featuredPet, setFeaturedPet} = useContext(DataContext)
const [pet, setPet] = useState('')
let photoArr=[];
let breed = ""; 
let attributes = [];



useEffect(() => {

    if(currentSearch.length>0){
    let selectedPet = currentSearch.find(
    (pet) => pet.id === parseInt(id)
    )
    
    setPet(selectedPet)
} else {
    setPet(featuredPet)
}
}, [currentSearch, id])

if (pet){
    for ( let i=0; i<pet.photos.length; i++) {
    photoArr.push(pet.photos[i].large)
    }
    if (pet.breeds.mixed === true && pet.breeds.secondary != null) {
        breed = `${pet.breeds.primary} / ${pet.breeds.secondary} `
    }else{
        breed = pet.breeds.primary
    }
    if(pet.attributes.house_trained === true){
        attributes.push("Yes!")
    } else {attributes.push("Not Yet!")}
    if(pet.attributes.shots_current === true){
        attributes.push("Yes!")
    } else {attributes.push("Not Yet!")}
    if(pet.attributes.spayed_neutered === true){
        attributes.push("Yes!")
    } else {attributes.push("Not Yet!")}
    if(pet.attributes.special_needs === true){
        attributes.push("Yes! See Description")
    } else {attributes.push("None!")}

}


let settings = {
    dots:true,
    infinite: true,
    draggable: true,
    adaptiveHeight: true,

}

// console.log(pet)


    return pet ? (
        <div className= "details-container">
            <div className="details-slideshow">
            <Slider {...settings}>
                {photoArr.map((photo)=>
                <img src={photo} className="detail-image" key={photo}/>
                )}

            </Slider>
            
            </div>
            <div className="detail-info">
                <h1>{pet.name}, {pet.gender}</h1>
                <h2>{pet.contact.address.city}, {pet.contact.address.state}</h2>
                <h3>{pet.age} <AiOutlineHeart style={{fontSize:"12px"}}/> {breed} <AiOutlineHeart style={{fontSize:"12px"}}/> {pet.size}</h3>
            </div>
            <div style={{display:"flex", width:"100%"}}>
            <div className="detail-about">
                <h2>About {pet.name}</h2>
                <h3>House Trained: {attributes[0]}</h3>
                <h3>Vaccine Staus: {attributes[1]}</h3>
                <h3>Spay/Neutered: {attributes[2]}</h3>
                <h3>Special Needs: {attributes[3]}</h3>
            </div>
            <div className ="detail-description">
                <p>{pet.description}</p>
                <a href={pet.url} target="_blank">Read More at PetFinder.com</a><br/>
                <br/>
                <h3>Status: {pet.status}</h3>
                <h3>Contact: {pet.contact.email}</h3>
            </div>
            
            </div>
        </div>
    ): <h1>...Loading Friend</h1>
}

export default AnimalDetails;