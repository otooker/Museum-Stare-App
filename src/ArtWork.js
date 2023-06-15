import {React, useEffect, useState} from "react";
import DisplayStare from "./EndCreation";


export default function ArtWorkChoices (props) {
    const { artwork, imageSource } = props;
    const { title, id, artist_display, date_display, image_id } = artwork;
    const [artid, setArtid] = useState('');
    

    function handleSelectClick(e){
        e.preventDefault();
        setArtid(e.target.attributes.selectorid.value);
    }
    
        useEffect(() => {
            if (handleSelectClick) {
                fetch(`https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,image_id,alt_image_ids`)
                    .then(results => results.json())
                   // .then(results => console.log(results))
                    .then(data => {
                        console.log(data.data);
                        setArtid(image_id)
                    });
            }
        }, [artid]);
    
  

    if (artid == '') {
        return (
            <div id="artworkcontainer">
            {image_id &&  <div className="artinfo" id={id}>
                <img id="artimage" src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}/>
                <h3>{title}</h3>
                <p>artist: {artist_display}, date: {date_display} </p> 
                <button onClick={() => (handleSelectClick)} selectorid={id} >Select this piece of art</button>
            </div>}
         
            </div>
            )
    } else {
        return (<div>WORKING?
            <DisplayStare setArtid={setArtid} artid={artid} image_id={image_id} imageSource={imageSource}/>
            
        </div>)
    }

    //load selected false, display. load true 
  }


//TODO STYLING: also make the search images smaller maybe
/*


*/