import HostelList from "./HostelList"
import useFetchHostels from "./useFetchHostels"

export default function Hostels(){
    const {status,hostels} = useFetchHostels()

    return(
        <div className="main">
            {status === "fetched"
            ?<>
                <HostelList hostels={hostels}/>

                <div style={{"width":"40%"}}>
                    <div className="container">
                    </div>
                    <div className="container">
                    </div>
                </div>
                
                <div style={{"width":"35%"}}>
                    <div className="container">
                    </div>
                    <div className="container">
                    </div>
                </div>
            </>

            :<div className="container">
                <h2>There was a problem fetching the hostel data.</h2>
            </div>
            }
        </div>
    )
}