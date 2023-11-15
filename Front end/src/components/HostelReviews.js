import ReviewList from "./ReviewList";


export default function HostelReviews({reviews, setHostel}){
    return(
        <div style={{"width":"35%"}}>
            <ReviewList reviews={reviews}/>
            <div className="container">
            </div>
            <div className="container">
            </div>
        </div>
    )
}