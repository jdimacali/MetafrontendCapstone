const Header = () => {
  return (
    <header>
      <div className="flex justify-between py-6 bg-[#495e57]">
        <div className=" w-48">
          <div className="mb-2">
            <h1 className="text-yellow-500 text-3xl">Little Lemon</h1>
            <h2 className="text-white text-xl"> Chicago</h2>
          </div>
          <p className="text-white mb-1">
            {" "}
            WE are a family owned Mediterranaean restaurant, focused on
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
        <div>
          <img
            src="/icons_assets/restauranfood.jpg"
            alt="food"
            className="w-96 h-96 object-cover rounded-2xl"
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
