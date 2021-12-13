const SkeletonPost = () => {
  return (
    <div className="bg-gray-100 mt-2 p-4 rounded-md shadow-md">
      <div className="animate-pulse relative h-56 w-72 bg-gray-300 lg:h-64 lg:w-80"></div>
      <p className="animate-pulse my-2 h-5 w-60 bg-gray-300 rounded-sm"></p>
      <p className="animate-pulse mb-3 h-5 w-32 bg-gray-300 rounded-sm"></p>
      <p className="animate-pulse h-6 w-24 bg-gray-300 py-1 px-3 rounded-md"></p>
    </div>
  );
};

export default SkeletonPost;
