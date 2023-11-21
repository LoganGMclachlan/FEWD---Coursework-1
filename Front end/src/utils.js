import { useMap } from "react-leaflet"
import { useEffect } from "react"

// takes list of ratings and returns the average
export function getAvgRating(ratings){
    let total = 0
    ratings.map(rating => total += rating)
    // result rounded to closest int
    return Math.round(total / ratings.length)
}

// returns an array of given length
export const createArray = length => [...Array(length)]

// function to auto recenter a map on position change
export const RecenterAutomatically = ({lat,long}) => {
    const map = useMap()

    useEffect(() => {
        map.setView([lat, long])
    }, [lat, long])

    return null
}