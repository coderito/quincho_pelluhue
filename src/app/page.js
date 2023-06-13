import Hero from "./components/Hero"
import GalleryFoot from "./components/GalleryFoot"
import UbicacionRestaurante from "./components/UbicacionRestaurante"
import VideoComponent from "./components/VideoComponent"
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';


export default function Home() {
  return (
    <>
    <div className="hidden md:flex fixed top-32 flex-col gap-5 right-8 z-50 text-black">
    <a
      href="https://www.instagram.com/tu_usuario_de_instagram/"
      target="_blank"
      rel="noopener noreferrer"
      className=""
    >
      <FaInstagram size={24} />
    </a>
    <a
      href="https://www.instagram.com/tu_usuario_de_instagram/"
      target="_blank"
      rel="noopener noreferrer"
      className=""
    >
      <FaFacebook size={24} />
    </a>
    <a
      href="https://www.instagram.com/tu_usuario_de_instagram/"
      target="_blank"
      rel="noopener noreferrer"
      className=""
    >
      <FaWhatsapp size={24} />
    </a>
    <a
      href="https://www.instagram.com/tu_usuario_de_instagram/"
      target="_blank"
      rel="noopener noreferrer"
      className=""
    >
      <FaTwitter size={24} />
    </a>
    </div>
    
    
      <Hero />
      <GalleryFoot />
      <VideoComponent />  
      <UbicacionRestaurante />   

    </>
  )
}
