import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'

function SearchCard(props) {


let navigate = useNavigate();

//find breeds if mixed
let breed = ""; 
if (props.pet.breeds.mixed === true && props.pet.breeds.secondary != null) {
    breed = `${props.pet.breeds.primary} / ${props.pet.breeds.secondary} `
}else{
    breed = props.pet.breeds.primary
}
let photoSRC = '';
if (props.pet.photos.length>0){
    photoSRC = props.pet.photos[0].large;
} else {
    
}
//navigate to animal details onclick
const handleClick = (id) => {
navigate(`${id}`)
}

    return (
        <div className='search-card' onClick = {()=>handleClick(props.pet.id)}>
            <h2 style={{
                fontSize: "calc(8px + 1vw)",
                margin: "1px"
            }}>{props.pet.name}</h2>
            <h4 style={{
                fontSize: "calc(6px + 1vw)",
                margin: "2px"
            }}>{props.pet.age} <AiOutlineHeart style={{
                fontSize: "12px"
            }}/> {breed}</h4>
            <h5>{props.pet.contact.address.city}, {props.pet.contact.address.state}</h5>
            <img src={photoSRC} className="search-photo" alt="No photos available"/>
        </div>
    ) 
}

export default SearchCard;