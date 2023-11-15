

export default function NewReview({setHostel}){

    return(
        <form className="container review">
            <h3>New Review</h3>

            <label>Your Name:</label>
            <input
                className="review-input"
                placeholder="Leave empty to sumbit as anonymous..."
            /><br/>

            <input 
                className="form-area"
                placeholder="Enter your review here..."
            /><br/>

            <button type="submit" className="btn">Submit</button>
        </form>
    )
}