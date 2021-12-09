import Header from "../components/layout/Header";
import CodeArchive from "../components/contents/CodeArchive";

const CodeHub = () => {
  const slogan = "Learn from me."
  return (
    <>
      <Header slogan={slogan} />
      <CodeArchive />
    </>
  );
};

export default CodeHub;
