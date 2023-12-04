import { useState } from "react"
import arrow from "../assets/down-arrow.jpg"


export default function EditItinerary({itinerary,setItinerary}){
    const [title,setTitle] = useState(itinerary.title)

    function removeStop(e, stop){
        e.preventDefault()
        if(!window.confirm(`Are you sure you want to delete ${stop.hostel.name} from this Itinerary?`)){ return }

        let filtered = {...itinerary}
        filtered.hostels = filtered.hostels.filter(s => s.id !== stop.id)
        setItinerary(filtered)
    } 

    return(
        <div className="container" style={{"width":"32%"}}>
            <input placeholder="Itinerary title..."
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="itinerary-title"/><br/>
            <>Start Date: {itinerary.start_date}</>
            
            <div className="scrollable" style={{"height":"410px"}}>
                {itinerary.hostels.map(stop => 
                    <div key={stop.id}>
                        <img src={arrow} className="arrow"/>
                        <h3 style={{"marginBottom":"5px"}}>{stop.hostel.name}</h3>
                        <>{stop.NumOfNights} nights</>
                        <button className="stage-btn" onClick={e => removeStop(e,stop)}>Remove Hostel</button>
                    </div>
                )}
            </div>

            <button className="wide-btn">
                Save
            </button>
        </div>
    )
}