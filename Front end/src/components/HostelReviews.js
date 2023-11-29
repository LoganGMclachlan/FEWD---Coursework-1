import NewReview from "./NewReview";
import ReviewList from "./ReviewList";


export default function HostelReviews({reviews, setHostel, selected}){
    return(
        <div style={{"width":"35%"}}>
            <ReviewList reviews={reviews}/>
            <NewReview setHostel={setHostel} selected={selected}/>
            <div className="container">
            </div>
        </div>
    )
}