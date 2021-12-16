import Navbar from "../components/sections/Navbar";
import Title from "../components/sections/Title";
import Footer from "../components/sections/Footer";
import MessageForm from "../components/contents/MessageForm";

const Contact = () => {
  const slogan = "Contact me."
  return (
    <>
      <Navbar />
      <Title slogan={slogan} />
      <MessageForm />
      <Footer />
    </>
  );
};

export default Contact;
