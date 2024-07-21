import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="md:mx-12 lg:mx-40 xl:mx-72 2xl:mx-96">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
