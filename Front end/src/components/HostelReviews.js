import AddToItinerary from "./AddToItinerary";
import NewReview from "./NewReview";
import ReviewList from "./ReviewList";

export default function HostelReviews({reviews, selected, setSelected}){
    return(
        <div style={{"width":"35%"}}>
            <ReviewList reviews={reviews}/>
            <NewReview selected={selected} setSelected={setSelected}/>
            <AddToItinerary hostel={selected}/>
        </div>
    )
}