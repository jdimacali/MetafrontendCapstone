const SpecialCard = ({ name, price, description, image }) => {
  return (
    <div>
      <img
        src={image}
        alt="food"
        className="rounded-t-2xl w-full h-56 object-cover shadow-2xl"
      />
      <div className="bg-yellow-50/80 py-4 px-4 h-60 flex flex-col justify-between">
        <div>
          <div className="flex justify-between">
            <h3 className="font-semibold">{name}</h3>
            <p className="text-[#c9a629]">{price}</p>
          </div>
          <p className="my-4">{description}</p>
        </div>

        <div className="flex gap-x-4 items-center">
          <h3 className="font-semibold">Order Delivery</h3>
          <img
            src="/icons_assets/Dish icon.svg"
            alt="dish"
            className="w-5 h-4"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialCard;
