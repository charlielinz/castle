import Header from "../components/layout/Header";
import CodeProjectHolder from "../components/contents/CodeProjectHolder";

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
