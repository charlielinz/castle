import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getFrontmatter, getContent, getPostPaths } from "../../posts/info";
import Image from "next/image";
import marked from "marked";

const Postpage = ({
  slug,
  frontmatter: { title, date, cover_image },
  content,
}) => {
  return (
    <>
      <Navbar />
      <header className="bg-gray-50 font-san text-gray-900">
        <div className="max-w-sm mx-auto px-8 pt-16 pb-8 flex justify-center lg:max-w-screen-lg lg:px-4 lg:py-20">
          <div className="w-11/12 bg-white rounded-md lg:grid lg:grid-cols-3 lg:w-3/4 lg:shadow-xl lg:p-8">
            <div>
              <p className="text-2xl px-4 pt-4 lg:text-3xl lg:p-4">{title}</p>
              <p className="px-4 lg:px-4">{date}</p>
            </div>
            <div className="relative mx-auto my-4 h-48 w-11/12 lg:col-start-2 lg:my-0 lg:ml-10 lg:h-80 lg:w-96">
              <Image
                src={cover_image}
                alt="cover image"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p
              className="lg:row-start-2 lg:p-4"
              dangerouslySetInnerHTML={{ __html: marked(content) }}
            ></p>
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
