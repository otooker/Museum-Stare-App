import React from "react";
import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";
import SearchArt from "./Search";

//TODO: make retake button for webcam, upload button -- display photo uploaded. Props will be used to transfer img? ???

export default function YourImage() {

    const webcamCapture = useRef(null);
    const [imageSource, setImageSource] = useState(null);
   

    const capture = useCallback(() => {
        const imgSrc = webcamCapture.current.getScreenshot();
        setImageSource(imgSrc);
    }, [webcamCapture, setImageSource]);

    //retake selfie button functionality 

    return (
        <div>
            {!imageSource &&
            <div> 
            <Webcam 
                audio={false}
                screenshotFormat="image/jpeg"
                ref={webcamCapture}
                id="webcam"
            />
            <button onClick={capture} >Take Selfie</button> </div>}
            
            {imageSource && <div>
                <h2>Your Photo here:</h2>
                <img src={imageSource} alt="selfie" imageid="imageId"/>
                <button>Retake Selfie</button>
                </div>}
          
            <SearchArt />

        </div>
    );
};


//TODO STYLING: make a min/max for the webcam and picture, imitate Ferris Bueller red for title
// MAYBE TO DO: upload image possibility  <input type="file" accept="image/*" />