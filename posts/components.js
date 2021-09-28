const BlockQuote = ({ children }) => {
  return (
    <>
      <blockquote className="italic my-2 border-l-8 pl-4 text-gray-600">
        {children}
      </blockquote>
    </>
  );
};

const P = ({ children }) => {
  return <p className="py-2">{children}</p>;
};

const Img = ({ src, title }) => {
  return (
    <>
      {title && <span className="text-sm list-item list-inside pb-2 pl-1 text-gray-700">{title}</span>}
      <img src={src} className="inline w-auto p-1 lg:h-72" />
    </>
  );
};

export const components = {
  blockquote: BlockQuote,
  p: P,
  img: Img,
};
