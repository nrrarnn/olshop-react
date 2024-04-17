import { styles } from "../styles";
import { heroSection } from "../constants";

const Hero = () => {
  return(
    <>
    <section id="Home" className="sm:pt-10 pt-28 bg-[#f3f5ff]">
      <div className={`flex flex-wrap ${styles.paddingY} w-full container lg:mx-auto ${styles.padding} sm:flex-row flex-col justify-around `}>
      <div className="flex flex-col sm:w-1/3 justify-center ">
        <h1 className="font-poppins font-extrabold text-[30px] text-slate-900">{heroSection.title} <span className="text-[#3e3eff]"> SarahShop!</span></h1>
        <p className={`${styles.paragraph} py-5`}>{heroSection.deskripsi}</p>
        <div className="">
        <button className={`${styles.button}`}><a href="#about">Jelajahi</a></button>
        </div>
        </div>
      <div className="flex justify-center ">
        <div className="mt-10 ">
          <img src="./images/shop.jpg" className=" w-[350px] md:w-[400px] lg:w-[500px]  p-1 sm:p-8" alt="shop" />
          </div>
      </div>
      </div> 
    </section>
    </>
  )

}

export default Hero;