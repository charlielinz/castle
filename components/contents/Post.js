import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import SkeletonPost from "../skeletons/SkeletonPost";

const Post = ({ postinfos }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // setIsLoading(true);
  }, []);

  return (
    <div className="max-w-sm mx-auto px-8 pb-8 lg:max-w-screen-lg lg:px-4 ">
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {postinfos.map((post, index) => (
          <div
            className={
              isLoading
                ? "bg-gray-100 mt-2 p-4 rounded-md shadow-md"
                : "bg-gray-100 p-4 rounded-md shadow-md"
            }
            key={index}
          >
            <div
              className={
                isLoading
                  ? "animate-pulse relative h-56 w-72 bg-gray-300 lg:h-64 lg:w-80"
                  : "relative h-56 w-72 lg:h-64 lg:w-80"
              }
            >
              <Image
                src={post.frontmatter.cover_image}
                alt="cover image"
                layout="fill"
                objectFit="contain"
                onLoadingComplete={() => setIsLoading(false)}
              />
            </div>
            <p
              className={
                isLoading
                  ? "animate-pulse my-2 h-5 w-60 bg-gray-300 rounded-sm"
                  : "pb-2"
              }
            >
              {!isLoading && (
                <>
                  <span>{post.frontmatter.title}</span>
                  <span className="ml-4 text-sm">{post.frontmatter.tag}</span>
                </>
              )}
            </p>
            <p
              className={
                isLoading
                  ? "animate-pulse mb-3 h-5 w-32 bg-gray-300 rounded-sm"
                  : "pb-4"
              }
            >
              {!isLoading && `Traveled in ${post.frontmatter.date}`}
            </p>
            <span
              className={
                isLoading
                  ? "animate-pulse h-6 w-24 bg-gray-300 py-1 px-3 rounded-md"
                  : "text-sm bg-gray-200 py-1 px-3 rounded-md lg:hover:bg-gray-300 lg:hover:font-extrabold lg:transition lg:duration-300"
              }
            >
              {!isLoading && (
                <Link href={`/blog/${post.slug}`} passHref>
                  <a>Read more...</a>
                </Link>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
