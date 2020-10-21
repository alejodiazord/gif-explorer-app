import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );
    
    return (
        <>
            <h2> { category } </h2>

            { loading && <p>Cargando...</p> }

            <div className="card-grid animate__animated animate__bounce" >   

                {
                    images.map( img =>  (
                        <GifGridItem 
                            key={ img.id } 
                            { ...img }
                        />
                    ))
                }

            </div>
        </>
    )


}
