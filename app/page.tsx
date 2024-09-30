import Image from "next/image";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Services from "./Components/Services"
import ThreeContainerLayout from "./Components/ThreeContainerLayout";
import HIC from "./Components/HIC";
import Contact from "./Components/contact";
import Landed from "./Components/land";
import Wallpaper from "./public/Images/00.jpeg"
import Questions from "./Components/questions";
export default function Home() {
  return (
      <div>
      <div className="relative w-full h-[600px]">
      <Image
        src={Wallpaper}
        alt="Wallpaper"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-black opacity-40" id="#num"></div>
          <Navbar/>
          <Landed/>
        </div>
        <section id="Aboutus">
          <ThreeContainerLayout/>
        </section>
        <section>
          <HIC/>
        </section>
        <section id="Services">
          <Services/>
        </section>
        <section>
          <Questions/>
        </section>
        <section id="Contact">
          <Contact/>
        </section>
        <Footer/>
      </div>
  );
}
