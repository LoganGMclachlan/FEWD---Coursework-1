import HostelSnippet from "./HostelSnippet";

export default function HostelList({hostels}){
    return(
    <div style={{"width":"25%","height":"490px"}} className="container">
        <h1>Search bar</h1>
        <div className="scrollable">
            {hostels.map(hostel => 
                <HostelSnippet hostel={hostel}/>
            )}
        </div>
    </div>
    )
}