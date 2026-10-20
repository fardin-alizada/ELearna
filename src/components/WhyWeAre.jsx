const CDN = "https://cdn.prod.website-files.com/668cb7adec02e140422345de/";

const features = [
  {
    title: "Learn anything",
    text: "Lorem ipsum dolor sit amet conse non quis id viverra id proin.",
    icon: `${CDN}66c6fb8bee2a8ef26987f800_Books%20Icons.svg`,
  },
  {
    title: "Save money",
    text: "Lorem ipsum dolor sit amet conse non quis id viverra id proin.",
    icon: `${CDN}66c6fb8bdf096206b7f4e62e_Money%20Bag%20ICon.svg`,
  },
  {
    title: "Flexible courses",
    text: "Lorem ipsum dolor sit amet conse non quis id viverra id proin.",
    icon: `${CDN}66c6fb8bf82fe9cef5f78d5e_Course%20Icon.svg`,
  },
  {
    title: "Unlimited certificate",
    text: "Lorem ipsum dolor sit amet conse non quis id viverra id proin.",
    icon: `${CDN}66c6fb8b98a2dc7066c69460_Verified%20Icon.svg`,
  },
];

const WhyWeAre = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.15em] text-gray-500">
            Why we are
          </p>
          <h2 className="mt-4 text-4xl font-medium text-gray-900 lg:text-5xl">
            Elevate your professional journey
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
            mus. Vitae diam dolor lacus amet integer ut.
          </p>
        </div>

        {/* Features */}
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {features.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">
              <img
                src={item.icon}
                alt=""
                loading="lazy"
                className="h-16 w-16 object-contain transition duration-500 hover:-translate-y-1 hover:scale-110"
              />

              <h3 className="mt-6 text-xl font-medium text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 max-w-[240px] text-sm leading-relaxed text-gray-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWeAre;