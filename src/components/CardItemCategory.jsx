


const CardItemCategory = ({card}) => {
  return(
    <>
    <div className="rounded-lg shadow-xl box-shadow max-w-[15rem] bg-[#f3f5ff] text-[#2f3c4d]" data-aos="zoom-in-down">
        <div className="p-10 flex flex-col justify-center items-center">
            <img src={`./images/${card.icon}`} alt={`${card.title}`} className="w-[50px]" />
            <h1 className="font-poppins font-semibold text-[15px] pt-4">{card.title}</h1>
        </div>
      </div>
    </>
  )
}

export default CardItemCategory;