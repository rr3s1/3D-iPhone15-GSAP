import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Higlights"
import VideoCarousel from "./components/VideoCarousel";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";

const  App = () => {
  
  return (
    <main className="bg-black">
        <Navbar/>
        <Hero/>
        <Highlights/>
        <VideoCarousel />
        <Model />
        <Features />
        <HowItWorks />
    </main>
  )
}

export default App
