const Header = ({ slogan }) => {
  return (
    <div className="max-w-sm mx-auto px-8 pt-28 pb-8 lg:max-w-screen-lg lg:px-4 lg:py-28">
      <p className="flex justify-center text-3xl lg:font-black lg:text-4xl">
        {slogan}
      </p>
    </div>
  );
};

export default Header;
