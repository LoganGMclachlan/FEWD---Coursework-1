import { useState } from "react"

export default function NewReview({selected}){
    const [author,setAuthor] = useState("")
    const [review,setReview] = useState("")
    const [rating,setRating] = useState("")

    function handleRatingChange(newRating){
        if((newRating > 5 || newRating < 1) && newRating != ""){ return }
        setRating(newRating)
    }

    // verifies input details
    function HandleAddReview(e){
        e.preventDefault()
        let reviewer = ""
        if(author === ""){ 
            reviewer = "Anonymous"
        }else{
            reviewer = author
        }
        if(review === ""){
            alert("Please write your review before submiting.")
            return
        }
        if(rating === ""){
            alert("Please give this review a star rating.")
            return
        }

        CreateReview({"reviewer":reviewer,"review":review},Number(rating))
    }

    // adds new review to db, including the new rating
    async function CreateReview(review,rating){
        await fetch(`http://localhost:3001/newReview`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({"review":review,"rating":rating,"target":selected})
        })
        .then(
            alert("Created your review successfuly! Refresh the page after a while to see it listed.")
        )
        .catch(err => {console.log(err)})
    }

    return(
        <form className="container review" onSubmit={e => HandleAddReview(e)}>
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
                value={rating}
                onChange={e => handleRatingChange(e.target.value)}
            />

            <button type="submit" className="btn">Submit</button>
        </form>
    )
}