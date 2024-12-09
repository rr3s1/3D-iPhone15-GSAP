import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Higlights"
import VideoCarousel from "./components/VideoCarousel";
import Model from "./components/Model";

const  App = () => {
  
  return (
    <main className="bg-black">
        <Navbar/>
        <Hero/>
        <Highlights/>
        <VideoCarousel />
        <Model />
    </main>
  )
}

export default App
