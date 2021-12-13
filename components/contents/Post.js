import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import SkeletonPost from "../skeletons/SkeletonPost";

const Post = ({ postinfos }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="max-w-sm mx-auto px-8 pb-8 lg:max-w-screen-lg lg:px-4 ">
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {postinfos.map((post, index) => (
          <>
            {isLoading ? (
              <SkeletonPost />
            ) : (
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
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Post;
