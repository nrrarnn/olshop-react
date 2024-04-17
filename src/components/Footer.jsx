import { BsInstagram} from "react-icons/bs"
import { MdEmail} from "react-icons/md";
import { FaTiktok } from "react-icons/fa"

const Footer = () => {
  return (
    <>
    <footer className="pt-[50px] pb-10 bg-indigo-600">
      <h1 className="text-center pb-8 font-bold text-white font-roboto">Follow Us</h1>
      <div className="flex flex-row justify-center items-center gap-5 text-white">

        <a href="https://instagram.com/srhnhdi61"><BsInstagram/></a>
        <a href="https://tiktok.com/"><FaTiktok/></a>
        <a href="https://gmail.com/"><MdEmail/></a>

      </div>
      <div className="flex justify-center pt-32">
      <p className="text-white">Copyright 2023 | ryndev </p>
      </div>
    </footer>
    </>
  )
}

export default Footer;