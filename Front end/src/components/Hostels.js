import HostelDetails from "./HostelDetails"
import HostelList from "./HostelList"
import HostelReviews from "./HostelReviews"
import useFetchHostels from "./useFetchHostels"
import { useEffect, useState } from "react"

export default function Hostels(){
    const {status,hostels} = useFetchHostels()
    const [selectedHostel, setSelectedHostel] = useState()

    useEffect(() => {
        setSelectedHostel(hostels[0])
    }, [status])

    return(
        <div className="main">
            {status === "fetched"
            ?<>
                <HostelList
                    hostels={hostels}
                    selectHostel={setSelectedHostel}/>

                <HostelDetails hostel={selectedHostel}/>

                <HostelReviews reviews={selectedHostel.reviews}
                    selected={selectedHostel} setSelected={setSelectedHostel}/>
            </>

            :<div className="container">
                <h2>There was a problem fetching the hostel data.</h2>
            </div>
            }
        </div>
    )
}