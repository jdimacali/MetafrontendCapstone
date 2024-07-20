const Nav = () => {
  return (
    <nav className="w-full my-8">
      <div className="flex w-full items-center">
        <img src="/icons_assets/Logo.svg" alt="logo" className="pr-16" />
        <ul className="flex gap-8 font-semibold ml-auto">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#reservations">Reservations</a>
          </li>
          <li>
            <a href="orderonline">Order online</a>
          </li>
          <li>
            <a href="login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
