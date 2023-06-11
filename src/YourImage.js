import React from "react";
import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";

// JSX to display your image
//TODO: spot for image, upload button, take photo button, make webcame disappear when photo taken, make retake button

export default function YourImage() {

    const webcamCapture = useRef(null);
    const [imageSource, setImageSource] = useState(null);
   

    const capture = useCallback(() => {
        const imgSrc = webcamCapture.current.getScreenshot();
        setImageSource(imgSrc);
    }, [webcamCapture, setImageSource]);

    function clearSelfie(){
       
    }

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


//TODO: in styling, make a min/max for the webcame and picture, change the image from displaying 