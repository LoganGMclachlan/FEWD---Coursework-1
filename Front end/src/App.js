import { useState } from "react"
import Navbar from "./components/Navbar"
import Itineraries from "./components/Itineraries"
import Hostels from "./components/Hostels"

function App() {
  const [tabSelected, setTabSelected] = useState("Hostels")// determines what tab to display
  const [newItinerary, setNewItinerary] = useState({
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

      {tabSelected === "Hostels" &&
        <Hostels itinerary={newItinerary} setItinerary={setNewItinerary}/>
      }
      {tabSelected === "Itineraries" &&
        <Itineraries/>
      }
    </body>
  );
}

export default App;
