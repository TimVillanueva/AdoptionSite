import React from 'react';
import {useContext, useState} from 'react';
import { DataContext } from '../DataContext';
import SearchCard from './SearchCard';

function Saved(props) {

const {saved, setSaved} = useContext(DataContext)

    return saved.length != 0 ? (
        <div className="search-container" >
            <div className="search-grid"> 
                    {
                        saved.map((card)=>(
                            <SearchCard
                                key = {card.id}
                                pet={card}/>
                        ))
                    }
                </div>
        </div>
    ): (
        <div className="search-container"style={{justifyContent: "center", alignItems:"center"}}>
            <div className="search-grid"><h1 style={{textAlign: "center"}}>None Saved...yet</h1></div>
        </div>
    )
}

export default Saved;