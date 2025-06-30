import Awards from "./Awards.jsx";
import Education from "./Education.jsx";
import Hero from "./Hero.jsx";
import Stats from "./Stats.jsx";
import Pricing from "./Pricing.jsx";
import OpenAccount from "../OpenAccount.jsx";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
function HomePage() {
    return ( 
       <>
       <Navbar/>
       <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer/>
       </>
     );
}

export default HomePage;