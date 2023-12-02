import { useState } from "react"
import arrow from "../assets/down-arrow.jpg"


export default function EditItinerary({itinerary}){
    const [title,setTitle] = useState(itinerary.title)

    return(
        <div className="container" style={{"width":"32%"}}>
            <input placeholder="Itinerary title..."
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="itinerary-title"/><br/>
            <>Start Date: {itinerary.start_date}</>
            
            <div className="scrollable" style={{"height":"410px"}}>
                {itinerary.hostels.map(stop => 
                    <div key={stop.hostel.id}>
                        <img src={arrow} className="arrow"/>
                        <h3 style={{"marginBottom":"5px"}}>{stop.hostel.name}</h3>
                        <>{stop.NumOfNights} nights</>
                        <button className="stage-btn">Remove Hostel</button>
                    </div>
                )}
            </div>

            <button className="wide-btn">
                Save
            </button>
        </div>
    )
}