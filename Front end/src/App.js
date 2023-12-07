import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Itineraries from "./components/Itineraries"
import Hostels from "./components/Hostels"
import { ItineraryContext } from "./components/ItineraryContext"
import { getTodaysDate } from "./utils"

function App() {
  const [tabSelected, setTabSelected] = useState("Hostels")// determines what tab to display

  const [currentItinerary, setCurrentItinerary] = useState(() => {// gets data from local storage
    const localValue = localStorage.getItem("ITINERARY")
    if (localValue === null) return {
        "title":"New Itinerary",
        "start_date":getTodaysDate(),
        "hostels":[]// will contain hostel title, location & No. of nights
      }
    return JSON.parse(localValue)
  })
  useEffect(() => {// saves changes made to itinerary list
      localStorage.setItem("ITINERARY", JSON.stringify(currentItinerary))
  }, [currentItinerary])

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
