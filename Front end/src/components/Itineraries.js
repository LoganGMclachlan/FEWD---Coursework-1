import { useContext } from "react"
import { ItineraryContext } from "./ItineraryContext"

export default function Itineraries(){
    const {currentItinerary, setCurrentItinerary} = useContext(ItineraryContext)

    return(
        <div className="container">
            <h2>Itineraries</h2>
            <h3>{currentItinerary.title}</h3>
            <p>{currentItinerary.start_date}</p>
            {currentItinerary.hostels.map(stay => 
                <div>   
                    {stay.hostel.name}
                    {stay.hostel.location}
                    {stay.NumOfNights}
                </div>
            )}
        </div>
    )
}