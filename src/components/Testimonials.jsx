import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CDN = "https://cdn.prod.website-files.com/668cb7adec02e140422345de/";

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.",
    name: "Linda Grady",
    role: "Co-assistant manager",
    image: `${CDN}66cd560b74d8d4d4ed334d02_Testimonial%20Author%20Image.avif`,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur. Molestie faucibus nibh felis tempor vel aliquet cursus placerat duis. Est felis pulvinar tortor ut nibh montes ante gravida velit. Facilisi posuere in sed mattis blandit duis aliquet.",
    name: "Jim Adams",
    role: "Designer",
    image: `${CDN}66cd64ef67641295ddd2ffc9_Testimonial%20Author%20Image-2.avif`,
  },
];

const stats = [
  { value: "70M", label: "Successful students" },
  { value: "25K", label: "Global job placements" },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  const prev = () =>
    setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-teal via-[#0b3038] to-brand-navy py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* ---------- Left: heading + photo ---------- */}
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
            Our testimonials
          </p>

          <h2 className="mt-4 text-4xl font-medium leading-tight text-white lg:text-5xl">
            Trusted by our successful students
          </h2>

          <div className="mt-10 overflow-hidden rounded-2xl">
            <img
              key={current.image}
              src={current.image}
              alt={current.name}
              loading="lazy"
              className="h-[360px] w-full object-cover transition duration-500 lg:h-[400px]"
            />
          </div>
        </div>

        {/* ---------- Right: stats + testimonial ---------- */}
        <div className="flex flex-col">
          {/* Stats */}
          <div className="flex flex-wrap gap-x-10 gap-y-6">
            {stats.map((stat, index) => (
              <div key={stat.value} className="flex items-center gap-5">
                {index > 0 && <span className="hidden h-12 w-px bg-white/20 sm:block" />}
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-semibold text-white lg:text-5xl">
                    {stat.value}
                  </span>
                  <span className="max-w-[90px] border-l border-white/20 pl-4 text-xs uppercase leading-snug tracking-wider text-white/70">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-12">
            <p className="text-lg leading-relaxed text-white/85 lg:text-xl">
              “{current.quote}”
            </p>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white">{current.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/60">
                {current.role}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-10 flex gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-brand-orange hover:bg-brand-orange hover:text-brand-navy"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-brand-orange hover:bg-brand-orange hover:text-brand-navy"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;