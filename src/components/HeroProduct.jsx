import { styles } from "../styles";

const HeroProduct = ({img, deskripsi}) => {
  return(
    <>
   <div className={`flex mx-auto justify-center ${styles.marginX} ${styles.paddingX}`}>
      <div className={`${styles.paddingX} bg-[#f3f5ff] flex flex-col sm:flex-row max-w-[1000px] justify-center items-center rounded-lg`}>
        <img src={`./images/${img}.jpg`} alt="product" className="w-[400px]" />
        <div className="pb-10">
          <p className="font-normal font-poppins text-[15px] text-slate-800">{deskripsi}</p>
        </div>
      </div>
   </div></>
  )
}

export default HeroProduct;