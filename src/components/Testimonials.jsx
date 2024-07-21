import Review from "./Review";

const Testimonials = () => {
  return (
    <section className="bg-[#495e57] py-12 md:-mx-12 lg:-mx-40 xl:-mx-72 2xl:-mx-96 px-6 md:px-0">
      <h1 className="text-white text-3xl text-center mb-12">
        Our customers love us!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center gap-12 px-6 lg:px-20 2xl:px-60">
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </section>
  );
};
export default Testimonials;
