import arrow from "../assets/down-arrow.jpg"
import { getTodaysDate } from "../utils"

export default function EditItinerary({itinerary,setItinerary,setItineraryList,itineraryList}){

    function removeStop(e, stop){
        e.preventDefault()
        if(!window.confirm(`Are you sure you want to delete ${stop.hostel.name} from this Itinerary?`)){ return }

        let filtered = {...itinerary}
        filtered.hostels = filtered.hostels.filter(s => s.id !== stop.id)
        setItinerary(filtered)
    }

    function setTitle(newTitle){
        if(newTitle.length > 30){ return }// sets char limit
        setItinerary({...itinerary,title:newTitle})
    }

    function saveItinerary(e){
        e.preventDefault()
        if(itinerary.title === ""){
            alert("Enter a title for this itinerary before saving.")
            return
        }
        if(itinerary.hostels.length < 1){
            alert("Cannot save an itinerary with no hostels.")
            return
        }

        let appended = [...itineraryList]
        appended.push(itinerary)
        setItineraryList(appended)
        setItinerary({
            "title":"New Itinerary",
            "start_date":getTodaysDate(),
            "hostels":[]
        })
        alert("Itinerary saved successfuly!")
    }

    return(
        <div className="container" style={{"width":"32%"}}>
            <input placeholder="Itinerary title..."
                value={itinerary.title}
                onChange={e => setTitle(e.target.value)}
                className="itinerary-title"/><br/>
            Start Date: {itinerary.start_date}
            
            <div className="scrollable" style={{"height":"410px"}}>
                {itinerary.hostels.map(stop => 
                    <div key={stop.id}>
                        <img src={arrow} className="arrow"/>
                        <h3 style={{"marginBottom":"5px"}}>{stop.hostel.name}</h3>
                        {stop.NumOfNights} nights
                        <button className="stage-btn" onClick={e => removeStop(e,stop)}
                            >Remove Hostel</button>
                    </div>
                )}
            </div>

            <button className="wide-btn" onClick={e => saveItinerary(e)}>Save</button>
        </div>
    )
}