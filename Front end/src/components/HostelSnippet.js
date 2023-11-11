import { FaStar } from "react-icons/fa";
import { getAvgRating, createArray } from "../utils"

export default function HostelSnippet({hostel}){
    const avgRating = getAvgRating(hostel.ratings)

    return(
        <div>
            <hr/>
            <h2>{hostel.name}</h2>

            {hostel.ratings.length > 0 
            ?<>
                {createArray(5).map((n, i) => (
                    <FaStar 
                    color={avgRating > i ? "yellow" : "grey"}
                    />
                ))}
            </>
            :<label>No Ratings</label>
            }
            
            {hostel.cafe
            ?<label> | Has Cafe</label>
            :<label> | No Cafe</label>
            }
        </div>
    )
}