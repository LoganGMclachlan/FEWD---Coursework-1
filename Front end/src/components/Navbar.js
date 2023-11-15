export default function Navbar({tab,setTab}){
    return(
        <div className="navbar">
            <p className="nav-heading">Itinerary Planner</p>
            {tab === "Hostels"
            ?<button className="nav-btn">Hostels</button>
            :<button className="nav-btn" onClick={() => setTab("Hostels")}>Hostels</button>
            }
            {tab === "Itineraries"
            ?<button className="nav-btn">Itineraries</button>
            :<button className="nav-btn" onClick={() => setTab("Itineraries")}>Itineraries</button>
            }
        </div>
    )
}