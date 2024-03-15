import { styles } from "../styles";

const CardItemRow = ({img,name,ex}) => {
  return(
    <div data-aos="flip-down">
    <div className="flex flex-row shadow-lg px-5 py-3 rounded-lg" >
        <img src={`./images/${img}.${ex}`} alt={`${name}`} className="w-[100px] h-[100px] rounded-full bg-indigo-100" />
        <div className="flex justify-center items-center pl-3 overflow-hidden">
          <h1 className={`${styles.heading3}`}>{name}</h1>
        </div>
    </div>
    </div>
  )
}

export default CardItemRow;