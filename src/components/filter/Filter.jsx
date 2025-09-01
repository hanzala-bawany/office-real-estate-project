import AntDropDown from '../antDropDown/AntDropDown'
import s from './filter.module.scss'
import { Input } from 'antd';
import { AiOutlineSearch } from 'react-icons/ai';


const Filter = () => {


  return (
    <div className={s.filter}>


      <h2>
        search results for <span> karachi </span>
      </h2>

      <div className={s.inputs}>

        <div className={s.top}>
          <label htmlFor="location">Location</label>
          <Input type="text" name='location' placeholder='City Location' id={s.location} />
        </div>

        <div className={s.bottom}>

          <div className={`${s.item} ${s.typeContainer}`}>
            <label htmlFor="type">Type</label>
            <AntDropDown  className={s.type} name="type" inputSelect={["any", "buy", "rent"]} />
          </div>

          <div className={`${s.item} ${s.propertyContainer}`}>
            <label htmlFor="property">Property</label>
            <AntDropDown  className={s.property} name="property" inputSelect={["any", "apartment", "house", "land", "building"]} />
          </div>

          <div className={`${s.item} ${s.minPriceContainer}`}>
            <label htmlFor="minPrice">Min Price</label>
            <Input name="minPrice" id={s.minPrice} placeholder='Min Price' type="number" />
          </div>

          <div className={`${s.item} ${s.maxPriceContainer}`}>
            <label htmlFor="maxPrice">Max Price</label>
            <Input placeholder="Min Price" name="maxPrice" id={s.maxPrice} type="number" />
          </div>

          <div className={`${s.item} ${s.bedroomContainer}`}>
            <label htmlFor="bedroom">Bedroom</label>
            <Input type="number" min={0} name="bedroom" id={s.bedroom} placeholder='Bedroom' />
          </div>

          <button>
            <AiOutlineSearch className={s.seacrhIcon} />
          </button>

        </div>

      </div>

    </div>
  )
}

export default Filter