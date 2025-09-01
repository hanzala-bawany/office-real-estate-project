import { MapContainer, TileLayer } from 'react-leaflet'
import s from "./reactLeafLetMap.module.scss"
import 'leaflet/dist/leaflet.css';
import MapPin from '../mapPin/MapPin';
// import ResizeMap from '../resizeMap/ResizeMap';



const ReactLeafLetMap = ({ itemData }) => {


    return (
        //   center={[lat, lng]}  <--- jahan se map khule ga
        //   zoom={7}  start me first zoom kitna ho 

        <MapContainer center={[itemData[0].latitude, itemData[0].longitude]} zoom={5} scrollWheelZoom={true} className={s.map} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* <ResizeMap /> */}
            {
                itemData.map((itemData) => <MapPin key={itemData.id} itemData={itemData} />)
            }

        </MapContainer>
    )
}

export default ReactLeafLetMap