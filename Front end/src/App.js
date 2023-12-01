import { useState } from "react"
import Navbar from "./components/Navbar"
import Itineraries from "./components/Itineraries"
import Hostels from "./components/Hostels"
import { ItineraryContext } from "./components/ItineraryContext"

function App() {
  const [tabSelected, setTabSelected] = useState("Hostels")// determines what tab to display
  const [currentItinerary, setCurrentItinerary] = useState({
    "title":"New Itinerary",
    "start_date":getTodaysDate(),
    "hostels":[]// will contain hostel title, location & No. of nights
  })

  // return todays date as a string in format dd/mm/yyyy
  function getTodaysDate(){
    let today = new Date()
    return `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`
  }

  return (
    <body>
      <Navbar tab={tabSelected} setTab={setTabSelected}/>

      <ItineraryContext.Provider value={{currentItinerary, setCurrentItinerary}}>
        {tabSelected === "Hostels" &&
          <Hostels/>
        }
        {tabSelected === "Itineraries" &&
          <Itineraries/>
        }
      </ItineraryContext.Provider>
    </body>
  );
}

export default App;
