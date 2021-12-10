import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="max-w-sm mx-auto px-8 pb-8 lg:max-w-screen-lg lg:px-4">
      <div className="flex flex-col justify-center items-center py-40">
        <p className="text-4xl font-bold pb-10">Oooops...</p>
        <p className="text-3xl font-thin text-gray-700 py-4">
          404 - Page Not Found
        </p>
        <p className="text-xl font-thin text-gray-500 py-2">
          This is not the web page you are looking for.
        </p>
        <p className="text-xl font-thin text-gray-500">
          Go to homepage by clicking the icon or
          <span className="text-gray-900 hover:text-gray-400 duration-500">
            <Link href="/">
              <a> here</a>
            </Link>
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default Custom404;
