import { useContext } from "react"
import { ItineraryContext } from "./ItineraryContext"

export default function Itineraries(){
    const {newItinerary, setNewItinerary} = useContext(ItineraryContext)

    return(
        <div className="container">
            <h2>Itineraries</h2>
            <h3>{newItinerary.title}</h3>
            <p>{newItinerary.start_date}</p>
            {newItinerary.hostels.map(stay => 
                <div>   
                    {stay.hostel.name}
                    {stay.hostel.location}
                    {stay.NumOfNights}
                </div>
            )}
        </div>
    )
}