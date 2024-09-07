const CardItemCategory = ({card}) => {
  return(
    <>
    <div className="rounded-lg shadow-xl box-shadow max-w-[15rem] border border-slate-300/50 text-[#2f3c4d]" data-aos="zoom-in-down">
        <div className="p-10 flex flex-col justify-center items-center text-center">
            <img src={`./images/${card.icon}`} alt={`${card.title}`} className="w-[50px]" />
            <h1 className="font-poppins font-semibold text-[15px] pt-4">{card.title}</h1>
            <p className="text-sm">{card.deskripsi}</p>
        </div>
      </div>
    </>
  )
}

export default CardItemCategory;