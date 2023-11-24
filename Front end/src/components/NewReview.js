import { useState } from "react"


export default function NewReview({setHostel}){
    const [author,setAuthor] = useState("")
    const [review,setReview] = useState("")
    const [rating,setRating] = useState("")

    // verifies input details
    function HandleAddReview(){
        if(author === ""){ setAuthor("Anonymous") }
        if(review === ""){
            alert("Please write your review before submiting.")
            return
        }
        if(rating === ""){
            alert("Please give this review a star rating.")
            return
        }

        CreateReview({"reviewer":author,"review":review},rating)
    }

    // adds new review to db, including the new rating
    async function CreateReview(review,rating){
        
    }

    return(
        <form className="container review" onSubmit={HandleAddReview}>
            <h2>Create Review</h2>

            <label>Author:</label>
            <input
                className="review-input"
                placeholder="Leave empty to sumbit as anonymous..."
                onChange={e => setAuthor(e.target.value)}
            /><br/>

            <textarea
                className="form-area"
                placeholder="Enter your review here..."
                onChange={e => setReview(e.target.value)}
            /><br/>

            <labal>Rating:</labal>
            <input
                type="number"
                className="form-num"
                onChange={e => setRating(e.target.value)}
            />

            <button type="submit" className="btn">Submit</button>
        </form>
    )
}