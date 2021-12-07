import Header from "../components/Header";
import MessageForm from "../components/MessageForm";

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
