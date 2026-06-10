const items = [
  "Fresh Ingredients",
  "Sushi",
  "Pho",
  "Ramen",
  "Bowls",
  "Noodles",
  "Rice",
  "Drinks",
  "Berlin"
];

export function MarqueeStrip() {
  return (
    <section className="overflow-hidden bg-[#5A3824] py-8 text-[#FFFDF8]">
      <div className="marquee-track flex w-max gap-14">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="display-punch text-5xl leading-none sm:text-7xl lg:text-8xl">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
