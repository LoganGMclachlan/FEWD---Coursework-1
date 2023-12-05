import StarRating from "./StarRating";

export default function HostelSnippet({hostel}){
    return(
        <div className="list-item">
            <h2>{hostel.name}</h2>

            <StarRating ratings={hostel.ratings}/>
            {hostel.cafe
            ?<label> | Has Cafe</label>
            :<label> | No Cafe</label>
            }
        </div>
    )
}