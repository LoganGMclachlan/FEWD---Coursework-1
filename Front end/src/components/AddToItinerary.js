import { useState } from "react"


export default function AddToItinerary({hostel,itinerary,setItinerary}){
    const [nights,setNights] = useState("")

    function AddHostel(e){
        e.preventDefault()
        if (nights < 1 || nights === ""){
            alert("Enter a number of nights of 1 or above")
            return
        }

        let newItinerary = {...itinerary}
        newItinerary.hostels.push({"hostel":hostel.id,"NumOfNights":Number(nights)})
        setItinerary(newItinerary)
        setNights("")
    }

    return(
        <form onSubmit={e => AddHostel(e)} className="container spaced">
            <label>Add Hostel to Itinerary</label>
            <input placeholder="Number of nights..."
                type="number" onChange={e => setNights(e.target.value)}/>
            <button type="submit" className="btn">Add</button>
        </form>
    )
}