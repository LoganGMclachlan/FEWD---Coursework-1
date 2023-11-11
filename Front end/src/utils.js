export function getAvgRating(ratings){
    let total = 0
    ratings.map(rating => total += rating)
    return Math.round(total / ratings.length)
}

export const createArray = length => [...Array(length)];