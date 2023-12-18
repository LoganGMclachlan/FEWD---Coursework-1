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

// return todays date as a string in format dd/mm/yyyy
export function getTodaysDate(){
    let today = new Date()
    return `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`
}

export const parseCoordinates = itinerary => {
    if(itinerary.hostels.length > 0){
        // gets list of coordinates to plot map whenever the selected itinerary changes
        let locations = []
        itinerary.hostels.map(stop => {
            locations.push({"lat":stop.hostel.location[0],"long":stop.hostel.location[1],"hostel":stop.hostel.name})
        })
        return locations
    }
    return [{"lat":55.86639,"long":-4.24919,"hostel":"Glasgow"}]// default marker placed on Glasgow
}

// takes in a list to return an id for a new item for it
export const getIdForList = list => {
    if (list.length < 1){ return 0 }// if list is empty start id at 0
    return list[list.length - 1].id + 1// find id of last item then add 1 for new id
}