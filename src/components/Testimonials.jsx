import Review from "./Review";

const Testimonials = () => {
  const reviews = [
    {
      reviewerName: "John Doe",
      reviewTitle: "Excellent Service",
      reviewBody: "The service was outstanding and beyond my expectations.",
    },
    {
      reviewerName: "Jane Smith",
      reviewTitle: "Highly Recommend",
      reviewBody:
        "I highly recommend this to anyone looking for great quality.",
    },
    {
      reviewerName: "Alex Johnson",
      reviewTitle: "Great Experience",
      reviewBody:
        "I had a great experience and will definitely come back again.",
    },
    {
      reviewerName: "Emily Davis",
      reviewTitle: "Amazing!",
      reviewBody: "Amazing! Everything was perfect from start to finish.",
    },
  ];

  return (
    <section className="bg-[#495e57] py-12 md:-mx-12 lg:-mx-40 xl:-mx-72 2xl:-mx-96 px-6 md:px-0">
      <h1 className="text-white text-3xl text-center mb-12">
        Our customers love us!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center gap-12 px-6 lg:px-20 2xl:px-60">
        {reviews.map((review, index) => (
          <Review
            key={index}
            reviewerName={review.reviewerName}
            reviewTitle={review.reviewTitle}
            reviewBody={review.reviewBody}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
