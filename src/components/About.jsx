import { about } from "../constants";

const About = () => {
  return(
    <>
    <section id="About" className={`flex w-full container lg:mx-auto sm:px-16 px-5 sm:flex-row flex-col justify-around bg-[#f3f5ff] py-36`}>
      <div className="sm:w-1/2 w-full flex justify-center px-8 mb-4 flex-col font-poppins">
        <h1 className="font-extrabold text-[28px] text-slate-900 pb-4">Tentang Kami</h1>
        <p className="font-normal text-[14px] leading-6 text-[#323a44] pb-7">Temukan Gaya Fashion & Aksesoris Terbaru, Makanan Lezat Yang Bikin Lidah Meleleh, Serta Cetak Foto yang Berkualitas Hanya di SarahShop!</p>
      </div>
      <div className="px-8 sm:w-1/2 w-full font-poppins">
        {about.map((ab) => (
          <div key={ab.id} className="flex mb-2">
            <div className="flex justify-center items-center mx-5">
              <div className="w-[50px] h-[50px] bg-[#e4e9ff] rounded-full flex justify-center items-center">
            <img src={`./images/${ab.img}.png`} className="w-[30px] h-[30px]" alt={`${ab.img}`} />
            </div>
            </div>
            <div className="w-4/5 text-[#323a44]">
              <h1 className=" text-[14px] font-semibold text-slate-900">{ab.title}</h1>
              <p className="font-normal  text-[13px]">{ab.deskripsi}</p>
              </div>
          </div>
        ))}
      </div>     
    </section>
    </>
  )
}

export default About;