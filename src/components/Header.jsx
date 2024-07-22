import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#495e57] py-12 md:-mx-12 lg:-mx-40 xl:-mx-72 2xl:-mx-96 md:mb-32 px-6 md:px-0">
      <div className="flex justify-between md:mx-12 lg:mx-40 xl:mx-72 2xl:mx-96 relative">
        <div className="w-48 md:w-64">
          <div className="mb-2">
            <h1 className="font-markazi text-[#F4C314] text-[2.5rem] md:text-[3.5rem] text-nowrap">
              Little Lemon
            </h1>
            <h2 className=" font-karla text-white text-xl"> Chicago </h2>
          </div>
          <p className="text-white mb-6 opacity-85">
            {" "}
            We are a family owned Mediterranaean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link
            className="bg-[#F4C314] font-semibold rounded-2xl py-[0.565rem] px-4"
            role="button"
            to="reservations"
          >
            {" "}
            Reserve a table{" "}
          </Link>
        </div>
        <div className="absolute left-[50%] lg:left-[60%]">
          <img
            src="/icons_assets/restauranfood.jpg"
            alt="food"
            className="w-72 h-64 md:w-96 md:h-[25rem] object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
