import HostelDetails from "./HostelDetails"
import HostelList from "./HostelList"
import useFetchHostels from "./useFetchHostels"
import { useState } from "react"

export default function Hostels(){
    const {status,hostels} = useFetchHostels()
    const [selectedHostel, setSelectedHostel] = useState(null)

    return(
        <div className="main">
            {status === "fetched"
            ?<>
                <HostelList hostels={hostels} selectHostel={setSelectedHostel}/>

                {selectedHostel &&
                <>
                    <HostelDetails hostel={selectedHostel}/>
                
                <div style={{"width":"35%"}}>
                    <div className="container">
                    </div>
                    <div className="container">
                    </div>
                    <div className="container">
                    </div>
                </div>
                </>
                }
                
            </>

            :<div className="container">
                <h2>There was a problem fetching the hostel data.</h2>
            </div>
            }
        </div>
    )
}