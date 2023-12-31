import { useContext, useState } from "react"
import { ItineraryContext } from "./ItineraryContext"
import { getIdForList } from "../utils"


export default function AddToItinerary({hostel}){
    const [nights,setNights] = useState("")
    const {currentItinerary, setCurrentItinerary} = useContext(ItineraryContext)

    function AddHostel(e){
        e.preventDefault()
        if (nights < 1 || nights === ""){
            alert("Enter a number of nights of 1 or above")
            return
        }

        let temp = {...currentItinerary}
        const shortHostel = {"id":hostel.id,"name":hostel.name,
            "location":[hostel.location.lat,hostel.location.long]}
        temp.hostels.push({"id":getIdForList(temp.hostels),"hostel":shortHostel,"NumOfNights":Number(nights)})
        setCurrentItinerary(temp)
        setNights("")
    }

    return(
        <form onSubmit={e => AddHostel(e)} className="container spaced">
            <label>Add Hostel to Itinerary</label>
            <input 
                placeholder="Number of nights..."
                type="number" 
                value={nights}
                onChange={e => setNights(e.target.value)}/>
            <button type="submit" className="btn">Add</button>
        </form>
    )
}