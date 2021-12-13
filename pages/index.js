import { useState, useEffect } from "react";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import HomeView from "../components/contents/HomeView";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div
        className={
          isLoading
            ? "absolute z-100 h-screen w-screen bg-gray-100 flex justify-center items-center gap-8"
            : "absolute z-100 h-screen w-screen bg-gray-50 flex justify-center items-center invisible opacity-0 duration-1000"
        }
      >
        <div className="animate-spin-slow origin-bottom-center h-16">
          <div className="inline-block animate-grow scale-50 h-10 w-10 bg-gray-400 rounded-full -m-1" />
          <div className="inline-block animate-grow animate-delay-750 scale-50 h-10 w-10 bg-gray-600 rounded-full -m-1" />
        </div>
      </div>
      <Navbar />
      <HomeView />
      <Footer />
    </>
  );
};

export default Index;
