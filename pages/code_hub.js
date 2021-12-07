import Header from "../components/Header";
import CodeProjectHolder from "../components/CodeProjectHolder";

const CodeHub = () => {
  const slogan = "Learn from me."
  return (
    <>
      <Header slogan={slogan} />
      <CodeProjectHolder />
    </>
  );
};

export default CodeHub;
