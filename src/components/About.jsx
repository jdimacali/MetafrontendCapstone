const About = () => {
  return (
    <section
      className="flex lg:flex-row flex-col items-center gap-y-10 justify-between mb-48 mt-20"
      id="about"
    >
      <div>
        <h1 className="text-[3rem] text-[#495e57] font-semibold">
          {" "}
          Little Lemon{" "}
        </h1>
        <h2 className="text-2xl -mt-4"> Chicago </h2>
        <p className="w-80 mt-8 text-sm">
          {" "}
          Little Lemon is a charming neighorhood bistor that servese simple offd
          and calssic cocktaisl in a lively but casual environment the restuarnt
          fewtures a locallay soruced menu with dailt specials. Little Lemon is
          a charming neighorhood bistor that servese simple offd and calssic
          cocktaisl in a lively but casual environment the restuarnt fewtures a
          locallay soruced menu with dailt specials.
        </p>
      </div>
      <div className="relative ml-48">
        <img
          src="icons_assets/Mario and Adrian b.jpg"
          alt="food"
          className=" h-48 w-60 md:h-72 md:w-72 rounded-lg object-cover"
        />
        <img
          src="icons_assets/Mario and Adrian A.jpg"
          alt="food"
          className="absolute h-48 w-60 md:h-72 md:w-72 top-32 right-40 rounded-lg object-cover"
        />
      </div>
    </section>
  );
};
export default About;
