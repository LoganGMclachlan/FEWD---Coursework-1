import { useContext, useEffect, useState } from "react"
import { ItineraryContext } from "./ItineraryContext"
import EditItinerary from "./EditItinerary"
import ItineraryList from "./ItineraryList"
import Map from "./Map"
import { parseCoordinates } from "../utils"

export default function Itineraries(){
    const {currentItinerary, setCurrentItinerary} = useContext(ItineraryContext)
    const [itineraryList, setItineraryList] = useState([])
    const [route,setRoute] = useState([{"lat":55.86639,"long":-4.24919}])

    useEffect(() => {
        setRoute(parseCoordinates(currentItinerary))
    }, [currentItinerary])

    return(
        <div className="main">
            <EditItinerary itinerary={currentItinerary} setItinerary={setCurrentItinerary}
                itineraryList={itineraryList} setItineraryList={setItineraryList}/>
            <div className="container" style={{"width":"40%"}}>
                {route.length > 0 && <Map locations={route} height="510px"/>}
            </div>
            <ItineraryList itineraryList={itineraryList} setItineraryList={setItineraryList}
                setItinerary={setCurrentItinerary}/>
        </div>
    )
}