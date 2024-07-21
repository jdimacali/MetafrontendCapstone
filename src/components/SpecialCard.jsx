const SpecialCard = ({ name, price, description, image }) => {
  return (
    <div>
      <img
        src={image}
        alt="food"
        className="rounded-t-2xl w-full h-56 object-cover shadow-2xl"
      />
      <div className="bg-yellow-50 py-4 px-2 h-60 flex flex-col justify-between">
        <div>
          <div className="flex justify-between">
            <h3>{name}</h3>
            <p className="text-yellow-500">{price}</p>
          </div>
          <p className="my-4">{description}</p>
        </div>

        <h3>Order Delivery</h3>
      </div>
    </div>
  );
};

export default SpecialCard;
