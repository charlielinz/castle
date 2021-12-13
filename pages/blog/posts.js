import Navbar from "../../components/sections/Navbar";
import Title from "../../components/sections/Title";
import Footer from "../../components/sections/Footer";
import Post from "../../components/contents/Post";
import { getPostInfos } from "../../posts/info";

const Posts = ({ postInfos }) => {
  const slogan = "Travel with me.";
  return (
    <>
      <Navbar />
      <Title slogan={slogan} />
      <Post postinfos={postInfos} />
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const postInfos = getPostInfos();
  return {
    props: { postInfos },
  };
};

export default Posts;
