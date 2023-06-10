// TODO: search API for artwork, select artwork
import {React, useState, useEffect} from "react";

export default function ArtWorkChoice () {
    const [artwork, setArtwork] =  useState([]);

    const fetchArtwork = () => {
        fetch("https://api.artic.edu/api/v1/artworks/24645/")
            .then(response => {
                return response.json()
            })
            .then(data => 
                setArtwork(data))
    }

    useEffect(() => {
        fetchArtwork()
    }, [])

   

    return (
        <div>
               

        </div>
    )
}


/* 

an attempt to display data, and I know it's wrong
       {artwork.length > 0 && (
        <ul>
          {artwork.map(artwork => (
            <li key={artwork.id}>{artwork.title}</li>
          ))}
        </ul>
      )}


*/