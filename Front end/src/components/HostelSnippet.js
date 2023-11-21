import StarRating from "./StarRating";

export default function HostelSnippet({hostel}){
    return(
        <>
            <hr/>
            <h2 style={{"cursor":"pointer"}}>{hostel.name}</h2>

            <StarRating ratings={hostel.ratings}/>
            {hostel.cafe
            ?<label> | Has Cafe</label>
            :<label> | No Cafe</label>
            }
        </>
    )
}