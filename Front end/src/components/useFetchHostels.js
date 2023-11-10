import  { useEffect, useState, useCallback } from "react"

const useFetchHostels = () => {
    const [status, setStatus] = useState('idle')
    const [hostels, setHostels]=useState([{
        "id": "0",
        "name": "", 
        "address": "", 
        "postcode": "",
        "phone": "", 
        "email": "",
        "description": "",
        "location": {"lat":0,"long":0}, 
        "cafe": false,
        "ratings": [0,0],
        "reviews" : [
            {"reviewer":"", "review": ""}
        ]
    }]);

    const fetchData = useCallback(() => {
        fetch("http://localhost:3001/hostels")
            .then((res) => res.json())
            .then((data) => {
                setHostels(data)
                setStatus('fetched')
                console.log(data)
            })
            .catch((err) => console.error(err))
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return { status, hostels }
}
export default useFetchHostels