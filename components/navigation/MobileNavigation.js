const MobileNavigation = ({ isOpened }) => {
  return (
    <>
      <li className="mr-3">
        <a
          className={
            isOpened
              ? "relative z-50 fas fa-stream px-4 py-2 text-xl text-gray-700 bg-gray-50 rounded-md transform duration-700 "
              : "fas fa-stream px-4 py-2 text-xl text-gray-700"
          }
          onClick={() => setIsOpened(!isOpened)}
        />
        <MobileDropdownMenu
          isOpened={isOpened}
          setIsOpened={setIsOpened}
          recitalList={recitalList}
        />
        <button
          className={
            isOpened
              ? "z-20 fixed bg-black h-full w-full top-0 bottom-0 left-0 right-0 opacity-60 transform duration-300 cursor-default"
              : "z-20 invisible fixed bg-black h-full w-full top-0 bottom-0 left-0 right-0 opacity-0 transform duration-300 cursor-default"
          }
          onClick={() => setIsOpened(false)}
        ></button>
      </li>
    </>
  );
};

export default MobileNavigation;
