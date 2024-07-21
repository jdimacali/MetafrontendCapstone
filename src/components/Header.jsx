const Header = () => {
  return (
    <header className="bg-[#495e57] py-12 md:-mx-12 lg:-mx-40 xl:-mx-72 2xl:-mx-96 md:mb-32 px-6 md:px-0">
      <div className="flex justify-between md:mx-12 lg:mx-40 xl:mx-72 2xl:mx-96 relative">
        <div className="w-48">
          <div className="mb-2">
            <h1 className="text-yellow-500 text-3xl">Little Lemon</h1>
            <h2 className="text-white text-xl"> Chicago</h2>
          </div>
          <p className="text-white mb-4">
            {" "}
            We are a family owned Mediterranaean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button
            className="bg-yellow-300 font-semibold rounded-2xl py-2 px-4"
            role="button"
          >
            {" "}
            Reserve a table{" "}
          </button>
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
