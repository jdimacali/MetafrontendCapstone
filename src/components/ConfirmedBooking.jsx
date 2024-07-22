const ConfirmedBooking = () => {
  return (
    <main className="md:mb-20 px-6 md:px-0 flex flex-col items-center justify-center py-12 md:-mx-12 lg:-mx-40 xl:-mx-72 2xl:-mx-96">
      <h1 className="text-2xl mb-8">Your Table Has Been Reserved! </h1>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-x-8">
        <img
          src="/icons_assets/restaurant.jpg"
          alt="restaurant"
          className="w-full md:w-auto md:h-[22rem] object-contain"
        />
      </div>
    </main>
  );
};
export default ConfirmedBooking;
