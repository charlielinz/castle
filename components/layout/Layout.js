import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 font-san text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
