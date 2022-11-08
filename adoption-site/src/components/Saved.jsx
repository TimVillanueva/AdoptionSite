import React from 'react';
import {useContext} from 'react';
import { DataContext } from '../DataContext';
import SearchCard from './SearchCard';

function Saved(props) {

const {saved, setSaved} = useContext(DataContext)
console.log(saved)
    return (
        <div className="search-container">
            <div className="search-grid"> 
                    {
                        saved.map((card)=>(
                            <SearchCard 
                                saved = {saved}
                                key = {card.id}
                                pet={card}/>
                        ))
                    }
                </div>
        </div>
    );
}

export default Saved;