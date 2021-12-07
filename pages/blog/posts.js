import Post from "../../components/Post";
import { getPostInfos } from "../../posts/info";

const Posts = ({ postInfos }) => {
  return (
      <Post postinfos={postInfos} />
  );
};

export const getStaticProps = async () => {
  const postInfos = getPostInfos();
  return {
    props: { postInfos },
  };
};

export default Posts;
