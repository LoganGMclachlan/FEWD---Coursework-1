import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { useEffect, useState } from "react"
import L, { Icon } from 'leaflet'
delete L.Icon.Default.prototype.getIconUrl
L.Icon.Default.mergeOptions({
    iconRetinaUrl:require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl:require('leaflet/dist/images/marker-icon.png'),
    shadowUrl:require('leaflet/dist/images/marker-shadow.png'),
})

export default function Map({hostels}){
    const [position,setPosition] = useState(
        [hostels[0].location.lat,hostels[0].location.long]
    )
    useEffect(() => {
        setPosition(
            [hostels[0].location.lat,hostels[0].location.long])
    }, [])

    const icon = new Icon({
        iconUrl: "/markerIcon.svg",
        iconSize: [30, 30],
    })

    return(
        <MapContainer center={position} zoom={9}
        scrollWheelZoom={true} className="map">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"          
            />

            {hostels.map(hostel =>
                <Marker
                    key={hostel.id}
                    position={[
                        hostel.location.lat,
                        hostel.location.long
                    ]}
                    icon={icon}
                >
                    <Popup>
                        {hostel.name}
                    </Popup>
                </Marker>
            )}
        </MapContainer>
    )
}