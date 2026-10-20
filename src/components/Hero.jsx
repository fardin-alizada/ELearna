import { FaAward, FaStar } from "react-icons/fa";

const GIRL_IMG =
  "https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8ca55c188e59cf91d8_Banner%20Girl.webp";
const HALF_MOON_IMG =
  "https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bdcbb90074c85249f_Half%20Moon.svg";
const YELLOW_DOT_IMG =
  "https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8b857efb6c4c737b8a_Yellow%20Dot.svg";
const BLUE_DOT_IMG =
  "https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bfbf579e1a5ff1577_Blue%20Circle.svg";

const avatars = [
  "https://i.pravatar.cc/100?img=32",
  "https://i.pravatar.cc/100?img=47",
  "https://i.pravatar.cc/100?img=12",
  "https://i.pravatar.cc/100?img=25",
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-teal via-[#0b2f38] to-brand-navy pb-20 pt-32 lg:pb-28 lg:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* ---------- Image side ---------- */}
        <div className="relative mx-auto w-full max-w-md sm:max-w-lg">
          {/* Decorative dots */}
          <img
            src={BLUE_DOT_IMG}
            alt=""
            className="absolute -left-2 top-[12%] w-7 sm:w-9"
          />
          <img
            src={YELLOW_DOT_IMG}
            alt=""
            className="absolute left-[8%] top-[52%] w-2.5"
          />
          <img
            src={YELLOW_DOT_IMG}
            alt=""
            className="absolute -right-3 top-[60%] w-3"
          />

          {/* Half moon (yellow shape behind the girl) */}
          <img
            src={HALF_MOON_IMG}
            alt=""
            className="absolute -left-6 top-[38%] w-24 sm:w-32"
          />

          {/* Dark rounded backdrop */}
          <div className="absolute right-0 top-[8%] h-[88%] w-[78%] rounded-[40px] bg-brand-navy/70" />

          {/* Main image */}
          <img
            src={GIRL_IMG}
            alt="Student smiling while studying"
            className="relative z-10 mx-auto w-full max-w-[460px] object-contain"
          />

          {/* Achievement badge */}
          <div className="absolute bottom-[38%] left-0 z-20 flex items-center gap-3 rounded-xl bg-white/95 px-4 py-3 shadow-xl sm:-left-6">
            <FaAward className="text-3xl text-brand-teal/80" />
            <div>
              <p className="text-lg font-bold leading-none text-gray-800">125+</p>
              <p className="mt-1 text-xs text-gray-500">Achievement awards</p>
            </div>
          </div>

          {/* Trusted by card */}
          <div className="absolute bottom-0 right-0 z-20 w-[62%] min-w-[220px] rounded-2xl bg-brand-navy px-5 py-4 text-center shadow-2xl sm:w-[58%]">
            <p className="text-xs text-white/70">Trusted By</p>
            <p className="mt-1 text-sm font-semibold text-white sm:text-base">
              15000+ enrolled students
            </p>

            <div className="mt-3 flex justify-center">
              {avatars.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt="Student"
                  className={`h-9 w-9 rounded-full border-2 border-brand-navy object-cover ${
                    i !== 0 ? "-ml-3" : ""
                  }`}
                />
              ))}
            </div>

            <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-white">
              <div className="flex text-brand-orange">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span>4.94 (625)</span>
            </div>
          </div>
        </div>

        {/* ---------- Text side ---------- */}
        <div className="text-center lg:text-left">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/80">
            Online learning
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
            More than{" "}
            <span className="text-brand-orange">25000+</span> education courses
            online
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/75 lg:mx-0">
            Lorem ipsum dolor sit amet consectetur. Gravida enim risus
            sollicitudin mauris tincidunt commodo ornare.
          </p>

          <a
            href="#"
            className="mt-10 inline-block border border-white/80 px-9 py-3.5 text-sm font-medium text-white transition duration-300 hover:bg-white hover:text-brand-navy"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;