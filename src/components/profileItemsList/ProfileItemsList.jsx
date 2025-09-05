import s from "./profileItemsList.module.scss"
import ListItem from "../../components/listItem/ListItem"
import { data } from "../../utills/dummyData"


const ProfileItemsList = () => {
  return (
    <div className={s.ProfileItemsList}>
        {
           data.map((itemData) => <ListItem key={itemData.id} itemData={itemData} />) 
        }
    </div>
  )
}

export default ProfileItemsList