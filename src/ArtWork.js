import { React, useEffect, useState } from "react";
import DisplayStare from "./EndCreation";


export default function ArtWorkChoices(props) {
    const { artwork, imageSource } = props;
    const { title, id, artist_display, date_display, image_id } = artwork;
    const [artid, setArtid] = useState('');
    const [isClicked, setIsClicked] = useState(false)




    function handleSelectClick(e) {
        e.preventDefault();
        const finalArtImageId = e.target.attributes.selectorid.value;
        setArtid(finalArtImageId);
        setIsClicked(true);
    }


    return (
        <div>
            {(isClicked === false && artid === '') ?
                (<div id="artworkcontainer">
                    {(image_id) && <div className="artinfo" id={id} artid={artid}>
                        <img id="artimage" src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`} />
                        <h3>{title}</h3>
                        <p>artist: {artist_display}, date: {date_display} </p>
                        <button onClick={handleSelectClick} selectorid={id} >Select this piece of art</button>
                    </div>} </div>)
                :
                <DisplayStare setArtid={setArtid} artid={artid} image_id={image_id} imageSource={imageSource} />
            }
        </div>)

}


//TODO STYLING: also make the search images smaller maybe
/*


*/