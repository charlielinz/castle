import Image from "next/image";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import HomeView from "../components/contents/HomeView";
import heroBanner from "../public/img/hero-banner.jpg";

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="invisible lg:visible lg:-top-4 lg:opacity-20">
        <Image src={heroBanner} placeholder="blur" layout="fill" objectFit="cover" objectPosition="center" />
      </div>
      <HomeView />
      <Footer />
    </>
  );
};

export default Index;
