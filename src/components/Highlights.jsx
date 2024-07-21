import SpecialCard from "./SpecialCard";

const Highlights = () => {
  return (
    <section className="md:mt-40 mt-12 mb-20 px-6 md:px-0">
      <div>
        <div className="flex md:flex-row flex-col gap-y-8 justify-between mb-12">
          <h1 className="text-3xl"> This week&apos;s specials! </h1>
          <button
            className="bg-yellow-300 font-semibold rounded-2xl py-2 px-4"
            role="button"
          >
            Order Online
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-x-8 gap-y-8">
          <SpecialCard
            name="Greek Salad"
            price="$11.99"
            description="The famous greek salad of crispy lettuce, peppersm olives and our chivcgo style feta cheesem g arnished with curnchy garlic and rosemaryt croutons"
            image="/icons_assets/greek salad.jpg"
          />
          <SpecialCard
            name="Brushcetta"
            price="$8.99"
            description="Our Brushcetta is made from grilled bread that has been smeared wit garlic and seasoned with salt and olive oil"
            image="/icons_assets/bruchetta.svg"
          />
          <SpecialCard
            name="Lemon Dessert"
            price="$4.99"
            description="This comes stright from grandma's recipe book, every last ingredient has been sourced and is as autthentic as can be imagined"
            image="/icons_assets/lemon dessert.jpg"
          />
        </div>
      </div>
    </section>
  );
};
export default Highlights;
