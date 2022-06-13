import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function LeafletMAP() {
    // const position = [54.72, 55.996] // Аркада
    const position = [54.801, 56.0948] // Трамвайная

    return (
        <MapContainer style={{height: '500px', width: '100%'}} center={position} zoom={15} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker style={{width: '40px'}} position={position}>
            <Popup >
                Мы здесь :) <br /> Приходите за покупками!
            </Popup>
        </Marker>
        </MapContainer>
    )
}
