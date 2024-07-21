const Footer = () => {
  return (
    <footer className="bg-[#495e57] py-12 pb-20 md:-mx-12 lg:-mx-40 xl:-mx-72 2xl:-mx-96 px-6 md:px-0">
      <div className="text-white md:mx-12 lg:mx-40 xl:mx-72 2xl:mx-96">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <img
            src="/icons_assets/logo_white.png"
            alt="logo"
            className="w-26 h-40 object-contain"
          />
          <div>
            <h2 className="font-semibold mb-4">Doormat Navigation</h2>
            <ul>
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
          <div>
            <h2 className="font-semibold mb-4">Contact</h2>
            <ul>
              <li>
                <a href="#home">Address</a>
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
            <h2 className="font-semibold mb-4">Social Media Links</h2>
            <ul>
              <li>
                <a href="#home">Address</a>
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
