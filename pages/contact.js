import Header from "../components/sections/Header";
import MessageForm from "../components/contents/MessageForm";

const Contact = () => {
  const slogan = "Contact me."
  return (
    <>
      <Header slogan={slogan} />
      <MessageForm />
    </>
  );
};

export default Contact;
