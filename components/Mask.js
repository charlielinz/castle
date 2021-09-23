const Mask = ({ isOpened, setIsOpened }) => {
  return (
    <button
      className={
        isOpened
          ? "z-20 fixed bg-black h-full w-full top-0 bottom-0 left-0 right-0 opacity-50 transform duration-500 cursor-default"
          : "z-20 invisible fixed bg-black h-full w-full top-0 bottom-0 left-0 right-0 opacity-0 transform duration-500 cursor-default"
      }
      onClick={() => setIsOpened(false)}
    ></button>
  );
};

export default Mask;
