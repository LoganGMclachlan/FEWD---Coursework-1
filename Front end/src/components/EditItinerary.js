import arrow from "../assets/down-arrow.jpg"
import { getIdForList, getTodaysDate } from "../utils"

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

    function isDateValid(date){
        // to check with Date(), must first put into a format it can read
        let dateBits = date.split("/")
        let newDate = `${dateBits[2]}/${dateBits[1]}/${dateBits[0]}`// format yyyy/mm/dd
        return !isNaN(new Date(newDate))// if result is not a number (aka invalid), return false
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
        if(!isDateValid(itinerary.start_date)){
            alert("Enter the start date in the format dd/mm/yyyy")
            return
        }

        let appended = [...itineraryList]
        itinerary.id = getIdForList(appended)
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
                className="itinerary-title"/><br/><br/>
            <label>Start Date: </label>
            <input placeholder="start date (dd/mm/yyyy)"
                value={itinerary.start_date}
                onChange={e => setItinerary({...itinerary,start_date:e.target.value})}
                className="review-input"/>
            
            <div className="scrollable" style={{"height":"370px"}}>
                {itinerary.hostels.map(stop => 
                    <div key={stop.id}>
                        <img src={arrow} className="arrow"/>
                        <h3 style={{"marginBottom":"5px","width":"70%"}}>{stop.hostel.name}</h3>
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