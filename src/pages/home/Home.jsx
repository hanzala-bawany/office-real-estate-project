import s from "./home.module.scss"
import img from "../../assets/property1.png"
import img1 from "../../assets/property2.png"
import HomeSearch from "../../components/homeSearch/HomeSearch"

const Home = () => {




  return (
    <div className={s.homePage}>

      <div className={s.leftWrapper}>
        <div className={s.left}>

          <h1 className={s.title}>
            find real estate & get your dream place
          </h1>

          <div className={s.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, culpa dolorem? Accusamus eligendi, culpa quae ea optio repellat placeat aperiam earum in cupiditate officia, hic voluptatibus quam. Et autem sapiente incidunt beatae.
          </div>

          <HomeSearch />

          <div className={s.boxes}>

            <div className={s.box}>
              <div className={s.num}>16+</div>
              <div className={s.text}>years of experience</div>
            </div>

            <div className={s.box}>
              <div className={s.num}>200</div>
              <div className={s.text}>award gained</div>
            </div>

            <div className={s.box}>
              <div className={s.num}>2000+</div>
              <div className={s.text}>property ready</div>
            </div>

          </div>

        </div>
      </div>

      <div className={s.right}>

        <img className={s.img} src={img} alt="" />
        <img className={s.img1} src={img1} alt="" />

      </div>
    </div>
  )
}

export default Home