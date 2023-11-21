import { MapContainer, TileLayer, Marker } from "react-leaflet"

export default function Map({locations}){

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
                    >
                </Marker>
            )}
        </MapContainer>
    )
}