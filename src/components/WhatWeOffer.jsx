const MAN_IMG =
  "https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bbdff100351a1e011_Man%20Image%20Holding%20Graph.webp";
const WOMAN_IMG =
  "https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8b45a3029806674bb6_Woman%20Image%20Holding%20Copy.webp";

const features = [
  "Skill-based instruction",
  "Analytics and insights",
  "Global certification",
  "Customizable courses",
];

const WhatWeOffer = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:gap-12 lg:px-8">
        {/* ---------- Image collage ---------- */}
        <div className="relative mx-auto h-[500px] w-full max-w-[560px]">
          {/* Top-right image (woman) */}
          <div className="absolute right-0 top-0 h-[52%] w-[62%] overflow-hidden rounded-2xl">
            <img
              src={WOMAN_IMG}
              alt="Student learning online with headphones"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Bottom-left image (man) */}
          <div className="absolute bottom-0 left-0 h-[58%] w-[60%] overflow-hidden rounded-2xl">
            <img
              src={MAN_IMG}
              alt="Student reviewing a chart"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Badge */}
          <div className="absolute left-0 top-[14%] z-10 rounded-md bg-brand-navy px-6 py-4 shadow-xl">
            <div className="flex items-start gap-2">
              <span className="text-5xl font-semibold leading-none text-brand-orange">
                50+
              </span>
              <span className="mt-1 text-base leading-tight text-white">
                Free courses
                <br />
                listed online
              </span>
            </div>
          </div>
        </div>

        {/* ---------- Text side ---------- */}
        <div>
          <p className="text-sm uppercase tracking-[0.15em] text-gray-500">
            What we offer
          </p>

          <h2 className="mt-4 text-4xl font-medium leading-tight text-gray-900 lg:text-5xl">
            Personalized learning for your ambitions
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
            mus. Vitae diam dolor lacus amet integer ut.
          </p>

          {/* Feature list (2 columns) */}
          <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {features.map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-700">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700" />
                {item}
              </li>
            ))}
          </ul>

          {/* Questions box */}
          <div className="mt-12 flex flex-col gap-6 rounded-2xl bg-gray-50 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Still have questions?
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.
              </p>
            </div>

            <a
              href="/contact-two"
              className="shrink-0 rounded-md bg-brand-navy px-8 py-3 text-center text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-teal hover:shadow-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;