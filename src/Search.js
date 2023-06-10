import { React, useEffect, useState} from "react";
import ArtWorkChoice from "./ArtWork";

//TODO: make artwork selectable, clear results for a new search?, id things so the css can work, limit artwork to paintings?


export default function SearchArt() {
    const [searchInput, setSearchInput] = useState('');
    const [artwork, setArtwork] = useState([]);
    
    useEffect(() => {
        if (searchInput) {
            fetch(`https://api.artic.edu/api/v1/artworks/search?q=${searchInput}&query[term][is_public_domain]=true&limit=20&fields=id,title,artist_display,date_display,image_id`)
                .then(results => results.json())
               // .then(results => console.log(results))
                .then(data => {
                    console.log(data.data);
                    setArtwork([...artwork, ...data.data])}
                    );
        }
    }, [searchInput]);

    function handleArtSearchSubmit(e) {
        e.preventDefault();
        setSearchInput(e.target.elements['art-search'].value);
    }


    return (
        <div className="ArtWorkSearch">
            <form onSubmit={handleArtSearchSubmit}>
                <input type="text" id="art-search"/>
                <button >Search</button>
            </form>
            <p>Search result(s) for '{searchInput}'</p>
            <div className="artworkinfodisplay">
                {artwork.map(artwork => <ArtWorkChoice artwork={artwork} />)}
            </div>
        </div>
    )
}



/// this is to search Chicago's API. Offer random as well as search specifics 
// Artwork will have what props we're going to display