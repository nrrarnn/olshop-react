import About from "./components/About"
import CardNavigate from "./components/CardNavigate"
import CetakFoto from "./components/CetakFoto"
import Contact from "./components/Contact"
import Food from "./components/Food"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Jastip from "./components/Jastip"
import Navbar from "./components/Navbar"
import Product from "./components/Product"
import Loader from "./components/Loader"
import { useState, useEffect } from "react"
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    Aos.init({duration:2000});
  },[])

  useEffect(() => {
    const delay = 2000;

    setTimeout(() => {
      setLoading(false);
    }, delay);
  }, []);

  return (
  
    <div>
      {loading ? 
      <Loader/> 
      :
      <div>
        <Navbar/>
        <Hero/>
        <CardNavigate/>
        <About/>
        <Product/>
        <Food/>
        <CetakFoto/>
        <Jastip/>
        <Contact/>
        <Footer/>
      </div>}
    </div>
  )
}

export default App
