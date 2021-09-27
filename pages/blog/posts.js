import Navbar from "../../components/Navbar";
import Post from "../../components/Post";
import Footer from "../../components/Footer";
import { getPostInfos } from "../../posts/info";

const Posts = ({ postInfos }) => {
  return (
    <>
      <Navbar />
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
