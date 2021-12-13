import Navbar from "../components/sections/Navbar";
import Title from "../components/sections/Title";
import Footer from "../components/sections/Footer";
import RecordArchive from "../components/contents/RecordArchive";

const MusicHall = () => {
  const slogan = "Listen to me.";
  return (
    <>
      <Navbar />
      <Title slogan={slogan} />
      <RecordArchive />
      <Footer />
    </>
  );
};

export default MusicHall;
