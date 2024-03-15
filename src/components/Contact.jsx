import { styles } from "../styles";
import { BsWhatsapp } from "react-icons/bs"

const Contact = () => {
  return (
    <section id="Contact" className="flex justify-center items-center flex-col pt-20 sm:px-36 px-10 h-[400px] bg-indigo-50">
        <h1 className="font-bold">Ingin Memesan ? Hubungi Kami!</h1>
        <p className="max-w-[500px] pt-5 text-center">Silahkan hubungi kami jika Anda tertarik dan ingin melakukan pemesanan. Kami siap menjawab pertanyaan Anda dan memberikan informasi yang Anda butuhkan.</p>
        <a href="https://wa.me/+6289526764087">
          <button className={`${styles.button} my-6`}>Pesan Sekarang <BsWhatsapp className="mr-2 inline-block"/> </button>
        </a>
    </section>
  )
}

export default Contact;