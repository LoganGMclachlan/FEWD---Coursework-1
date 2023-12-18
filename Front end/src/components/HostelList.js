import HostelSnippet from "./HostelSnippet";
import { useState } from "react";
import Search from "./Search";

export default function HostelList({hostels, selectHostel}){
    const [filtered,setFiltered] = useState(hostels)

    return(
    <div style={{"width":"25%","height":"490px"}} className="container">
        
        <Search hostels={hostels} setFilterd={setFiltered}/>

        <div className="scrollable" style={{"height":"400px"}}>
            {filtered.map(hostel => 
                <div onClick={() => selectHostel(hostel)} key={hostel.id}>
                    <HostelSnippet hostel={hostel}/>
                </div>
            )}
        </div>
    </div>
    )
}