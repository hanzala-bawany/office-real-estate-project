import { Marker, Popup, useMap } from 'react-leaflet'
import s from "./mapPin.module.scss"
import { Link } from 'react-router-dom'

const MapPin = ({ itemData }) => {
    return (
        //  position={[24.8607, 67.0011]}  <--  jaan mark karna ho 
        <Marker position={[itemData.latitude, itemData.longitude]}>
            <Popup>
                <div className={s.popupContainer}>

                <Link to={`/listPage/${itemData.id}`} >
                    <img src={itemData.img} alt="" className={s.popupImg} />
                </Link>
                    
                    <div className={s.content}>
                
                        <div className={s.title}>
                            <Link to={`/listPage/${itemData.id}`} >
                                {itemData.title}
                            </Link>
                        </div>
                        <div className={s.price}>
                           Rs. <span> {itemData.price} </span>
                        </div>
                        <div className={s.bedroom}>
                            {itemData.bedroom} bedroom
                        </div>
                
                    </div>
                
                </div>
            </Popup>
        </Marker>
    )
}

export default MapPin