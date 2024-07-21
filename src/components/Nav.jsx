import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-full py-8">
      <div className="flex w-full items-center justify-between px-6 md:px-0">
        <img src="/icons_assets/Logo.svg" alt="logo" className="pr-16" />
        <ul className="md:flex md:gap-4 lg:gap-8 font-semibold ml-auto items-center hidden whitespace-nowrap">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="menu">Menu</Link>
          </li>
          <li>
            <Link to="reservations">Reservations</Link>
          </li>
          <li>
            <Link to="orderonline">Order online</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
        </ul>
        <img
          src="/icons_assets/icon_hamburger.svg"
          alt="menu"
          className="md:hidden h-5"
        />
      </div>
    </nav>
  );
};
export default Nav;
