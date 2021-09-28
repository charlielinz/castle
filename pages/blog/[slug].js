import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getFrontmatter, getContent, getPostPaths } from "../../posts/info";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { components } from "../../posts/components";

const Postpage = ({
  slug,
  frontmatter: { title, date, tag, cover_image },
  content,
}) => {
  return (
    <>
      <Navbar />
      <header className="bg-gray-50 font-san text-gray-900">
        <div className="max-w-sm mx-auto px-4 pt-8 pb-8 flex justify-center lg:max-w-screen-lg lg:px-4 lg:py-20">
          <div className="w-11/12 bg-white rounded-md shadow-md lg:grid lg:grid-cols-3 lg:shadow-xl lg:p-8">
            <div>
              <p className="text-2xl px-4 pt-4 lg:text-3xl lg:p-4">{title}</p>
              <p className="text-sm px-4 py-2 lg:text-base lg:px-4">{date}</p>
              <p className="text-sm px-4 lg:text-base lg:p-4">{tag}</p>
            </div>
            <div className="relative mx-auto my-4 h-60 w-11/12 lg:col-start-2 lg:col-end-4 lg:justify-self-stretch lg:my-0 lg:h-80 lg:w-96">
              <Image
                src={cover_image}
                alt="cover image"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <ReactMarkdown
              className="prose p-4 lg:min-w-full lg:col-start-1 lg:col-end-4"
              children={content}
              components={components}
            />
          </div>
        </div>
      </header>
      <Footer />
    </>
  );
};

export const getStaticPaths = async () => {
  const postPaths = getPostPaths();
  return {
    paths: postPaths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const filename = slug + ".md";
  const frontmatter = getFrontmatter(filename);
  const content = getContent(filename);

  return {
    props: {
      slug,
      frontmatter,
      content,
    },
  };
};

export default Postpage;
