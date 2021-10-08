import Link from "next/link";
import Image from "next/image";

const Post = ({ postinfos }) => {
  return (
    <header className="bg-gray-50 font-san text-gray-900">
      <div className="max-w-sm mx-auto px-8 pt-28 pb-8 lg:max-w-screen-lg lg:px-4 lg:py-28">
        <p className="flex justify-center text-3xl lg:font-black lg:text-4xl">
          Travel with me.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-24">
          {postinfos.map((post, index) => (
            <div className="bg-gray-100 p-4 rounded-md shadow-md" key={index}>
              <div className="relative h-56 w-72 lg:h-64 lg:w-80">
                <Image
                  src={post.frontmatter.cover_image}
                  alt="cover image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="pb-2">
                <span>{post.frontmatter.title}</span>
                <span className="ml-4 text-sm">{post.frontmatter.tag}</span>
              </p>
              <p className="pb-4">Traveled in {post.frontmatter.date}</p>
              <span className="text-sm bg-gray-200 py-1 px-3 rounded-md lg:hover:bg-gray-300 lg:hover:font-extrabold lg:transition lg:duration-300">
                <Link href={`/blog/${post.slug}`} passHref>
                  <a>Read more...</a>
                </Link>
              </span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Post;
