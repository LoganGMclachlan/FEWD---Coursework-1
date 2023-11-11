import { useEffect, useState } from "react"
import { getAvgRating } from "../utils"

export default function Search({hostels,setFilterd}){
    const [searchField, setSearchField] = useState("")
    const [hasCafe,setHasCafe] = useState(true)
    const [rating,setRating] = useState("")

    function handleRatingChange(newRating){
        if((newRating > 5 || newRating < 1) && newRating != ""){ return }
        setRating(newRating)
    }

    const filtered = hostels.filter(item => {   
        // filters based on cafe & rating if search bar is empty
        if (searchField === ""){
            // ignore rating in filter if empty
            if(rating == ""){
                return (
                    item.cafe === hasCafe
                )
            }
            return (
                item.cafe === hasCafe &&
                Math.round(getAvgRating(item.ratings)) == rating
            )
        }

        // filters by name
        return(item.name.toLowerCase().includes(searchField.toLowerCase()))
    })

    useEffect(() => {
        setFilterd(filtered)
    }, [filtered])

    return(
        <div>
            <input
                placeholder="Search..."
                onChange={e => setSearchField(e.target.value)}
                className="search-bar"
            />
            <div className="filters">
                <label>Has Cafe?:</label>
                <input
                    type="checkbox"
                    checked={hasCafe}
                    onChange={() => setHasCafe(!hasCafe)}
                />
                <label style={{"marginLeft":"15px"}}>Rating:</label>
                <input
                    type="number"
                    value={rating}
                    onChange={e => handleRatingChange(e.target.value)}
                    style={{"width":"10%","marginLeft":"5px"}}
                />
            </div>
        </div>
    )
}