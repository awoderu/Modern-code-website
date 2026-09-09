import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
import Features from "./component/Features"
import Pricing from "./component/Pricing"
import Testimonials from "./component/Testimonials"
import Footer from "./component/Footer"
import { useEffect, useState } from "react"


function App(){
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
    <Navbar/>
    <Hero/>
    <Features/>
    <Pricing/>
    <Testimonials/>
    <Footer/>
  </div>
}

export default App;