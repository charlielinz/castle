import Title from "../components/sections/Title";
import MessageForm from "../components/contents/MessageForm";

const Contact = () => {
  const slogan = "Contact me."
  return (
    <>
      <Title slogan={slogan} />
      <MessageForm />
    </>
  );
};

export default Contact;
