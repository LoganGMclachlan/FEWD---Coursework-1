import { FaStar } from "react-icons/fa";
import { getAvgRating, createArray } from "../utils"

export default function StarRating({ratings}){
    const avgRating = getAvgRating(ratings)

    return(
        <>
        {ratings.length > 0 
            ?<>
                {createArray(5).map((n, i) => (
                    <FaStar 
                    color={avgRating > i ? "orange" : "grey"}
                    />
                ))}
            </>
            :<label>No Ratings</label>
            }
        </>
    )
}