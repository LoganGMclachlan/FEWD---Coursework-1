import { useEffect, useState } from "react"
import { getAvgRating } from "../utils"

export default function Search({hostels,setFilterd}){
    const [searchField, setSearchField] = useState("")
    const [hasCafe,setHasCafe] = useState(true)
    const [rating,setRating] = useState(3)

    function handleRatingChange(newRating){
        if(newRating > 5 || newRating < 1){ return }
        setRating(newRating)
    }

    const filtered = hostels.filter(item => {
        return (item.name.toLowerCase().includes(searchField.toLowerCase()) &&
                item.cafe === hasCafe &&
                Math.round(getAvgRating(item.ratings)) == rating
                )
    })

    useEffect(() => {
        setFilterd(filtered)
    }, [filtered])

    return(
        <div>
            <input
                placeholder="Search..."
                onChange={e => setSearchField(e.target.value)}
            />
            <br/>
            <label>Has Cafe?:</label>
            <input
                type="checkbox"
                checked={hasCafe}
                onChange={() => setHasCafe(!hasCafe)}
            />
            <label>Rating:</label>
            <input
                type="number"
                value={rating}
                onChange={e => handleRatingChange(e.target.value)}
            />
        </div>
    )
}