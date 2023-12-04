

export default function ReviewList({reviews}){

    return(
        <div className="container" style={{"borderBottom":"none"}}>
            <h2>Hostel Reviews</h2>
            <div className="review-list">
            {reviews.map(review => 
                <div className="review">
                    <h3>Author: {review.reviewer}</h3>
                    <p>{review.review}</p>
                </div>
            )}
            </div>
        </div>
    )
}