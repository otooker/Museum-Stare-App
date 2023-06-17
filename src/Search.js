import { React, useEffect, useState} from "react";
import ArtWorkChoice from "./ArtWork";
import DisplayStare from "./EndCreation";

//TODO: make artwork selectable, clear results for a new search?, id things so the css can work

export default function SearchArt(props) {
    const { imageSource } = props;
    const [searchInput, setSearchInput] = useState('');
    const [artwork, setArtwork] = useState([]);
    const [artid, setArtid] = useState([]);
    
    useEffect(() => {
        if (searchInput) {
            fetch(`https://api.artic.edu/api/v1/artworks/search?q=${searchInput}&query[term][is_public_domain]=true&limit=5&fields=id,title,artist_display,date_display,image_id`)
                .then(results => results.json())
               // .then(results => console.log(results))
                .then(data => {
                    //console.log(data.data);
                    setArtwork([...artwork, ...data.data])}
                    );
        }
    }, [searchInput, artid]);

    function handleArtSearchSubmit(e) {
        e.preventDefault();
        setSearchInput(e.target.elements['art-search'].value);
    }


    return (
        <div className="ArtWorkSearch" id="artworksearch">
            <form onSubmit={handleArtSearchSubmit}>
                <input type="text" id="art-search"/>
                <button >Search</button>
            </form>
            <div className="artworkinfodisplay">
                {artwork.map(artwork => <ArtWorkChoice artwork={artwork} setArtid={setArtid} imageSource={imageSource}/>)}
            </div>
            
        </div>
    )
}
// useState here  for id, leave empty 
//use effect dependency on id
//toggle here 