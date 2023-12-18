import { useContext, useEffect, useState } from "react"
import { ItineraryContext } from "./ItineraryContext"
import EditItinerary from "./EditItinerary"
import ItineraryList from "./ItineraryList"
import Map from "./Map"
import { parseCoordinates } from "../utils"

export default function Itineraries(){
    const {currentItinerary, setCurrentItinerary} = useContext(ItineraryContext)
    const [route,setRoute] = useState(parseCoordinates(currentItinerary))

    const [itineraryList, setItineraryList] = useState(() => {// gets data from local storage
        const localValue = localStorage.getItem("ITINERARY_LIST")
        if (localValue === null) return []
        return JSON.parse(localValue)
    })
    useEffect(() => {// saves changes made to itinerary list
        localStorage.setItem("ITINERARY_LIST", JSON.stringify(itineraryList))
    }, [itineraryList])

    useEffect(() => {
        setRoute(parseCoordinates(currentItinerary))
    }, [currentItinerary])

    return(
        <div className="main">
            <EditItinerary itinerary={currentItinerary} setItinerary={setCurrentItinerary}
                itineraryList={itineraryList} setItineraryList={setItineraryList}/>
            <div className="container" style={{"width":"40%"}}>
                <Map locations={route} height="510px"/>
            </div>
            <ItineraryList itineraryList={itineraryList} setItineraryList={setItineraryList}
                setItinerary={setCurrentItinerary}/>
        </div>
    )
}