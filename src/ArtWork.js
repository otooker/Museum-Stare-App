import {React, useState} from "react";



export default function ArtWorkChoices (props) {
    const { artwork } = props;
    const { title, id, artist_display, date_display, image_id } = artwork;
    const [artid, setArtid] = useState('');
    
   // possible callback option --- need to grab the id of the selected artwork so it can be used in the next child 
    function handleSelectClick(e){
        e.preventDefault();
        setArtid(e.target.attributes.selectorid.value);
    }

    //load selected false, display. load true 
    return (
        <div id="artworkcontainer">
        {image_id &&  <div className="artinfo" id={id}>
            <img id="artimage" src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}/>
            <h3>{title}</h3>
            <p>artist: {artist_display}, date: {date_display} </p> 
            <button onClick={handleSelectClick} selectorid={id} >Select this piece of art</button>
        </div>}
        </div>
        )}


//TODO STYLING: also make the search images smaller maybe
/*


*/