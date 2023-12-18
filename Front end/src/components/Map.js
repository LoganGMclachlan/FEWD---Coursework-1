import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { useEffect, useState } from "react"
import { RecenterAutomatically } from "../utils"

import L, { Icon } from 'leaflet'
delete L.Icon.Default.prototype.getIconUrl
L.Icon.Default.mergeOptions({
    iconRetinaUrl:require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl:require('leaflet/dist/images/marker-icon.png'),
    shadowUrl:require('leaflet/dist/images/marker-shadow.png'),
})

export default function Map({locations, height}){
    const [position,setPosition] = useState(
        [locations[0].lat,locations[0].long]
    )
    useEffect(() => {
        setPosition([locations[0].lat,locations[0].long])
    }, [locations])

    const icon = new Icon({
        iconUrl: "/markerIcon.svg",
        iconSize: [30, 30],
    })

    return(
        <MapContainer center={position} zoom={7} keyboard={false}
        scrollWheelZoom={true} className="map" style={{"height":height}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"          
            />

            {locations.map(location =>
                <Marker
                    position={[
                        location.lat,
                        location.long
                    ]}
                    icon={icon}
                    eventHandlers={{ mouseover: e => e.target.openPopup(),
                            mouseout: e => e.target.closePopup() }}
                >
                <Popup>{location.hostel}</Popup>
                </Marker>
            )}
            
            <RecenterAutomatically lat={locations[0].lat} long={locations[0].long} />
        </MapContainer>
    )
}