import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);
    
    return (
        <div className="containerGif">
           <h1>Gif Explorer</h1>
           <AddCategory setCategories={ setCategories } ></AddCategory>
           <hr />
           <ol>
               {
                    categories.map( category =>  ( 
                        <GifGrid key={category} category={category} />
                    ))
               }
           </ol>
        </div>
    )

}



export default GifExpertApp;
