import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function LeafletMAP() {
    // const position = [54.72, 55.996] // Аркада
    const position = [54.801, 56.0948] // Трамвайная

    return (
        <MapContainer className='maps_leaflet' center={position} zoom={15} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker style={{width: '40px'}} position={position}>
            <Popup >
                <h6>Мы здесь - приходите :)<br />Индустриальное ш. 44/1</h6>
            </Popup>
        </Marker>
        </MapContainer>
    )
}
