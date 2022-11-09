import React from 'react';
import {useContext} from 'react'
import { DataContext } from '../DataContext';
import {FaCat, FaDog, FaRunning} from 'react-icons/fa'
import {ImSleepy} from 'react-icons/im'
import {GiSpookyHouse} from 'react-icons/gi'
import { MdApartment} from 'react-icons/md'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'

function GuidedSearch(props) {

const {searchCriteria, setSearchCriteria} = useContext(DataContext)
let temporary = searchCriteria;
let navigate= useNavigate()

const handleChoice = (choice) => {
if (choice === "cats") { 
        temporary.type="cat";
        setSearchCriteria(temporary)
        document.querySelector(".roundOne").style.visibility="hidden"
        document.querySelector(".roundTwo").style.visibility="visible"
} else if (choice === "dogs"){
        temporary.type="dog";
        setSearchCriteria(temporary)
        document.querySelector(".roundOne").style.visibility="hidden"
        document.querySelector(".roundTwo").style.visibility="visible"
}else if (choice === "active"){
        temporary.age="baby, young, adult"
        setSearchCriteria(temporary)
        document.querySelector(".roundTwo").style.visibility="hidden"
        document.querySelector(".roundThree").style.visibility="visible"
} else if (choice === "inactive"){
        temporary.age="adult, senior"
        setSearchCriteria(temporary)
        document.querySelector(".roundTwo").style.visibility="hidden"
        document.querySelector(".roundThree").style.visibility="visible"
} else if (choice === "large"){
        temporary.size="medium, large, xlarge"
        setSearchCriteria(temporary)
        document.querySelector(".roundThree").style.visibility="hidden"
        document.querySelector(".roundFour").style.visibility="visible"
} else if (choice==="small"){
        temporary.size="small, medium"
        setSearchCriteria(temporary)
        document.querySelector(".roundThree").style.visibility="hidden"
        document.querySelector(".roundFour").style.visibility="visible"
}else if (choice === "submit") {
        if (searchCriteria.zip === ''){
                alert('Please Enter A Zip Code!')
                navigate(`/`)
                document.querySelector(".roundOne").style.visibility="visible"
                document.querySelector(".roundFour").style.visibility="hidden"
        } else {
        navigate('Search')
}}
}


return (
        <div className="guided-search">
        <ul className="roundOne">
        <button className="guided-buttons" onClick ={()=>handleChoice("cats")}><FaCat style={{fontSize:"60px"}}/><br/><h1>Cats</h1></button>
        <button className="guided-buttons" onClick ={()=>handleChoice("dogs")}><FaDog style={{fontSize:"60px"}}/><br/><h1>Dogs</h1></button>
        </ul>
        <ul className="roundTwo">
        <button className="guided-buttons" onClick ={()=>handleChoice("active")}><FaRunning style={{fontSize:"60px"}}/><br/><h1>I'm Very Active!</h1></button>
        <button className="guided-buttons" onClick ={()=>handleChoice("inactive")}><ImSleepy style={{fontSize:"60px"}}/><br/><h1>Not So Much</h1></button>
        </ul>
        <ul className="roundThree">
        <button className="guided-buttons" onClick ={()=>handleChoice("large")}><GiSpookyHouse style={{fontSize:"60px"}}/><br/><h1>I Have Lots Of Room</h1></button>
        <button className="guided-buttons" onClick ={()=>handleChoice("small")}><MdApartment style={{fontSize:"60px"}}/><br/><h1>I'm Short on Space</h1></button>
        </ul>
        <ul className="roundFour">
        <input type="text"  id="zip" placeholder="Zip Code" value={searchCriteria.zip} onChange = {(e)=>setSearchCriteria({...searchCriteria, zip:e.target.value})}/>
        <button className="guided-buttons" id="guided-submit" onClick ={()=>handleChoice("submit")}><AiOutlineArrowDown style={{fontSize:"60px"}}/><br/><h1>DONE!</h1></button>
        </ul>
        </div>
);
}

export default GuidedSearch;