import { MapContainer, TileLayer, Marker } from "react-leaflet"

import L, { Icon } from 'leaflet'
delete L.Icon.Default.prototype.getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl:require('leaflet/dist/images/marker-icon.png'),
    shadowUrl:require('leaflet/dist/images/marker-shadow.png'),
})

export default function Map({locations}){
    const icon = new Icon({
        iconUrl: "/markerIcon.svg",
        iconSize: [30, 30],
    });


    return(
        <MapContainer center={[55.86639,-4.24919]} zoom={9}
        scrollWheelZoom={true} className="map">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"          
            />

            {locations.map(location =>
                <Marker
                    position={[
                        location.lat,
                        location.long,
                    ]}
                    icon={icon}
                    >
                </Marker>
            )}
        </MapContainer>
    )
}