const Footer = () => {
  return (
    <footer>
      <div className="px-6 md:px-0">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <img src="/icons_assets/Logo.svg" alt="logo" className="w-32 h-12" />
          <div>
            <h2 className="text-lg font-semibold">Doormat Navigation</h2>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                {" "}
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
          <div>
            <h2 className="text-lg font-semibold">Contact</h2>
            <ul>
              <li>
                <a href="#home">Online</a>
              </li>
              <li>
                <a href="#home">Phone Number</a>
              </li>
              <li>
                <a href="#home">Email</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Social Media Links</h2>
            <ul>
              <li>
                <a href="#home">Online</a>
              </li>
              <li>
                <a href="#home">Phone Number</a>
              </li>
              <li>
                <a href="#home">Email</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
