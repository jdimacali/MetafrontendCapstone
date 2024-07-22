const Review = ({ reviewerName, reviewTitle, reviewBody }) => {
  return (
    <div className="bg-white border border-black rounded-lg px-6 py-8">
      <div className="flex">
        <img src="/icons_assets/star.svg" alt="profile" className=" h-6 w-6" />
        <img src="/icons_assets/star.svg" alt="profile" className=" h-6 w-6" />
        <img src="/icons_assets/star.svg" alt="profile" className=" h-6 w-6" />
        <img src="/icons_assets/star.svg" alt="profile" className=" h-6 w-6" />
        <img src="/icons_assets/star.svg" alt="profile" className=" h-6 w-6" />
      </div>
      <div className="my-4">
        <h2 className="text-xl font-semibold">{reviewTitle}</h2>
        <p>{reviewBody}</p>
      </div>

      <div className="flex items-center gap-4">
        <img
          src="/icons_assets/Mario and Adrian b.jpg"
          alt="profile"
          className="rounded-full h-10 w-10"
        />
        <h3 className="text-sm text-gray-500 text-nowrap">{reviewerName}</h3>
      </div>
    </div>
  );
};
export default Review;
