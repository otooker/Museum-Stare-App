// TODO: combine photo uploaded and painting chosen into a gif, plus music?, create "create" button maybe
//TODO: research how to add music by link or stream to og source
//info flow is not working right now. research callback(), play class videos on props

import YourImage from "./YourImage";
import SearchArt from "./Search";

export default function DisplayStare(props){
    
    


    return (
        <div className="MuseumStare" id="museumstare">
       
            Museum Stare
            {props.selectedid}
        </div>
    )
}