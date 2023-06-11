import React from "react";
import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";

//TODO: make retake button for webcam, upload button -- display photo uploaded. Props will be used to transfer img? ???

export default function YourImage() {

    const webcamCapture = useRef(null);
    const [imageSource, setImageSource] = useState(null);
   

    const capture = useCallback(() => {
        const imgSrc = webcamCapture.current.getScreenshot();
        setImageSource(imgSrc);
    }, [webcamCapture, setImageSource]);

    const clearSelfie = 

    return (
        <div>
            {!imageSource &&
            <div> 
            <Webcam 
                audio={false}
                width={843}
                screenshotFormat="image/jpeg"
                ref={webcamCapture}
            />
            <button onClick={capture} >Take Selfie</button> </div>}
            
            {imageSource && <div>
                <h2>Your Photo here:</h2>
                <img src={imageSource} alt="selfie" imageId="imageId"/>
                <button onClick={clearSelfie}>Retake Selfie</button>
                </div>}
            <input type="file" accept="image/*" />
        </div>
    );
};


//TODO STYLING: make a min/max for the webcam and picture, imitate Ferris Bueller red for title