import { useState } from "react"
import s from "./homeSearch.module.scss"
import { AiOutlineSearch } from 'react-icons/ai';

const HomeSearch = () => {

  const searchTypes = ["buy","rent"]

  const [ searchQuery , setSearchQuery ] = useState({
    type : "buy",
    location : "karachi",
    minPrice : 0,
    maxPrice : 0
  })

  const handleType = (type) =>{
    setSearchQuery({...searchQuery , type : type})
  }
  console.log(searchQuery , "user query");

  return (
    <div className={s.homeSearch}>

      <div className={s.searchType}>
        {
          searchTypes.map((type)=> <button onClick={() => handleType(type)} className={type == searchQuery.type ? s.active : ""} > {type} </button> )
        }
      </div>
      <div className={s.searchBar}>
        <input type="text" placeholder="City , location" />
        <input type="number" placeholder="Min price" min={0} max={100000000}  />
        <input type="number" placeholder="Max price" min={0} max={100000000}  />
        <button>
          <AiOutlineSearch className={s.seacrhIcon} />
        </button>
      </div>

    </div>
  )
}

export default HomeSearch