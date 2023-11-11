import { FaStar } from "react-icons/fa";

export default function HostelSnippet({hostel}){
    const avgRating = getAvgRating(hostel.ratings)

    function getAvgRating(ratings){
        let total = 0
        ratings.map(rating => total += rating)
        return Math.round(total / ratings.length)
    }

    const createArray = length => [...Array(length)];

    return(
        <div>
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
            <hr/>
        </div>
    )
}