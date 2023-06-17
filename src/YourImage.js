import React from "react";
import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";
import SearchArt from "./Search";


//TODO: mirror webam?, make retake button for webcam

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
               
                </div>}
          
            <SearchArt imageSource={imageSource}/>
        </div>
    );
};


//TODO STYLING: make a min/max for the webcam and picture
// MAYBE TO DO: upload image possibility  <input type="file" accept="image/*" />
//<button>Retake Selfie</button>