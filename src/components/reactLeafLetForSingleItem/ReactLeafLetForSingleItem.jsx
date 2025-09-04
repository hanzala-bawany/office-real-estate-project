import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import s from "./reactLeafLetForSingleItem.module.scss";


const ReactLeafLetForSingleItem = ({activeItemData}) => {


    return (

            <MapContainer className={s.mapConatinerOfSingleItem} center={[activeItemData?.latitude, activeItemData?.longitude]} zoom={11} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[activeItemData?.latitude, activeItemData?.longitude]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
       
    )
}

export default ReactLeafLetForSingleItem