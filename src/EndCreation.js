// TODO: combine photo uploaded and painting chosen into a gif, plus music?, create "create" button maybe
//TODO: research how to add music by link or stream to og source
//info flow is not working right now. research callback(), play class videos on props
import React from "react";


export default function DisplayStare(props){
    const {selectorid, setArtid, artid, imageSource, setImageSource, image_id} = props;


    return (
        <div className="MuseumStare" id="museumstare">
            <img id="artimage" src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}/>
            <img src={imageSource} alt="selfie" imageid="imageId"/>
            Museum Stare

        </div>
    )
}