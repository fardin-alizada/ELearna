const CDN = "https://cdn.prod.website-files.com/668cb7adec02e140422345de/";

const logos = [
  { src: `${CDN}66c6fb8bca715a603abbc84f_Clients%20Logo.svg`, alt: "Partner logo 1" },
  { src: `${CDN}66c6fb8b87b34b4188395ff2_Clients%20Logo-4.svg`, alt: "Partner logo 2" },
  { src: `${CDN}66c6fb8beb3991b3db5cd5ff_Clients%20Logo-6.svg`, alt: "Partner logo 3" },
  { src: `${CDN}66c6fb8bb6896643f3baa632_Clients%20Logo-2.svg`, alt: "Partner logo 4" },
  { src: `${CDN}66c6fb8bf82fe9cef5f78d2a_Clients%20Logo-3.svg`, alt: "Partner logo 5" },
  { src: `${CDN}66c6fb8bf99901dda5c25e7e_Clients%20Logo-5.svg`, alt: "Partner logo 6" },
];

const Clients = () => {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-center text-base text-gray-600 sm:text-lg">
          Learn from 350+ leading universities and companies with us
        </p>
      </div>

      <div className="relative mt-10 overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-32" />

        {/* Track: logos are duplicated so the loop is seamless */}
        <div className="flex w-max motion-safe:animate-marquee hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex h-16 w-44 shrink-0 items-center justify-center px-6 sm:w-56"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="h-10 w-auto max-w-full object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;