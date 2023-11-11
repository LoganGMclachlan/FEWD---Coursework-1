import HostelSnippet from "./HostelSnippet";
import { useState } from "react";
import Search from "./Search";

export default function HostelList({hostels}){
    const [filtered,setFiltered] = useState(hostels)

    return(
    <div style={{"width":"25%","height":"490px"}} className="container">
        
        <Search hostels={hostels} setFilterd={setFiltered}/>

        <div className="scrollable">
            {filtered.map(hostel => 
                <HostelSnippet hostel={hostel}/>
            )}
        </div>
    </div>
    )
}