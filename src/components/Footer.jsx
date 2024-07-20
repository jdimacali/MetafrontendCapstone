const Footer = () => {
  return (
    <footer>
      <div className="flex">
        <div className="mr-20">
          <img src="/icons_assets/Logo.svg" alt="logo" className="pr-16" />
        </div>

        <div className="flex gap-40">
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
