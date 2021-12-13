import Navbar from "../components/sections/Navbar";
import Title from "../components/sections/Title";
import Footer from "../components/sections/Footer";
import CodeArchive from "../components/contents/CodeArchive";

const CodeHub = () => {
  const slogan = "Learn from me.";
  return (
    <>
      <Navbar />
      <Title slogan={slogan} />
      <CodeArchive />
      <Footer />
    </>
  );
};

export default CodeHub;
