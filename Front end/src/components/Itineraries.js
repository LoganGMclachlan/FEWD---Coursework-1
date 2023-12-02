import { useContext, useEffect, useState } from "react"
import { ItineraryContext } from "./ItineraryContext"
import EditItinerary from "./EditItinerary"
import ItineraryList from "./ItineraryList"
import Map from "./Map"

export default function Itineraries(){
    const {currentItinerary, setCurrentItinerary} = useContext(ItineraryContext)
    const [route,setRoute] = useState([])

    useEffect(() => {
        // gets list of coordinates to plot map whenever the selected itinerary changes
        let locations = []
        currentItinerary.hostels.map(stop => {
            locations.push({"lat":stop.hostel.location[0],"long":stop.hostel.location[1]})
        })
        setRoute(locations)
    }, [currentItinerary])

    return(
        <div className="main">
            <EditItinerary itinerary={currentItinerary}/>
            <div className="container" style={{"width":"40%"}}>
                {route.length > 0 && <Map locations={route} height="510px"/>}
            </div>
            <ItineraryList/>
        </div>
    )
}