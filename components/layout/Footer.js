const Footer = () => {
  return (
    <footer className="bg-gray-50 h-48 pb-2 text-gray-500 flex flex-col items-center justify-end">
      <div>
        <a
          href="https://www.facebook.com/profile.php?id=100000764741703"
          target="_blank"
          rel="noreferrer"
          className="fab fa-facebook text-4xl h-10 w-10 px-0.5 mx-0.5"
        >
        </a>
        <a
          href="https://www.instagram.com/c5e.castle/"
          target="_blank"
          rel="noreferrer"
          className="fab fa-instagram text-4xl h-10 w-10 px-0.5 mx-0.5"
        >
        </a>
        <a
          href="https://www.linkedin.com/in/charlie-lin-0a424b117/"
          target="_blank"
          rel="noreferrer"
          className="fab fa-linkedin-in text-4xl h-10 w-10 px-0.5 mx-0.5"
        >
        </a>
        <a
          href="https://github.com/charlielinz"
          target="_blank"
          rel="noreferrer"
          className="fab fa-github text-4xl h-10 w-10 px-0.5 mx-0.5"
        >
        </a>
      </div>
      <p className="text-sm">Copyright &copy; 2021 Charlie</p>
    </footer>
  );
};

export default Footer;
