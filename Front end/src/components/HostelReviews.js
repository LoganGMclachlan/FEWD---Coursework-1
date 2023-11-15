import NewReview from "./NewReview";
import ReviewList from "./ReviewList";


export default function HostelReviews({reviews, setHostel}){
    return(
        <div style={{"width":"35%"}}>
            <ReviewList reviews={reviews}/>
            <NewReview setHostel={setHostel}/>
            <div className="container">
            </div>
        </div>
    )
}