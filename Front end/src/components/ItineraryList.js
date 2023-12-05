
export default function ItineraryList({itineraryList,setItineraryList,setItinerary}){

    // makes user aware of the potential data loss of this action and asks to confirm
    function handleSelect(e,itinerary){
        e.preventDefault()
        if(!window.confirm("Have you saved your current itinerary? All unsaved data will be lost.")){ return }
        setItinerary(itinerary)
    }

    // removes selected itinerary from list
    function deleteItinerary(e,itinerary){
        e.preventDefault()
        if(!window.confirm(`Are you sure you want to delete the ${itinerary.title} itinerary?`)){ return }

        setItineraryList(itineraryList.filter(i => i.id !== itinerary.id))
    }

    return(
        <div className="container" style={{"width":"30%"}}>
            <h2>Saved Itineraries</h2>
            {itineraryList.map(itinerary => 
                <div key={itinerary.id}>
                    <h3 onClick={e => handleSelect(e,itinerary)}>{itinerary.title}</h3>
                    <label>{itinerary.start_date}</label>
                    <button className="stage-btn" onClick={e => deleteItinerary(e,itinerary)}
                        >Delete</button>
                </div>
            )}
        </div>
    )
}