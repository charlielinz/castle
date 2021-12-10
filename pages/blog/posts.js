import Header from "../../components/sections/Header";
import Post from "../../components/contents/Post";
import { getPostInfos } from "../../posts/info";

const Posts = ({ postInfos }) => {
  const slogan = "Travel with me.";
  return (
    <>
      <Header slogan={slogan}/>
      <Post postinfos={postInfos} />
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
