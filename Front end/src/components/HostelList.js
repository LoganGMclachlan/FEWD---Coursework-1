import HostelSnippet from "./HostelSnippet";
import { useState } from "react";
import Search from "./Search";

export default function HostelList({hostels, selectHostel}){
    const [filtered,setFiltered] = useState(hostels)

    return(
    <div style={{"width":"25%","height":"490px"}} className="container">
        
        <Search hostels={hostels} setFilterd={setFiltered}/>

        <div className="scrollable">
            {filtered.map(hostel => 
                <button onClick={() => selectHostel(hostel)} key={hostel.id} className="list-item">
                    <HostelSnippet hostel={hostel}/>
                </button>
            )}
        </div>
    </div>
    )
}