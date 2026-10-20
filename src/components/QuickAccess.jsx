const POPULAR_IMG =
  "https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c86806b094d5e2529855a0_Woman%20Using%20Laptop.webp";

const VIDEO_URL =
  "https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c86567624ca9dec83f55cc_Home%20One%20Video-transcode.mp4";

const QuickAccess = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-2 lg:px-8">
        {/* ---------- Card 1: Popular courses ---------- */}
        <div className="relative flex min-h-[380px] overflow-hidden rounded-3xl bg-gray-100">
          {/* Image */}
          <img
            src={POPULAR_IMG}
            alt="Student studying online with headphones"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* White fade so text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-100/80 to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex w-full flex-col justify-center p-8 sm:w-3/5 sm:p-12">
            <h3 className="text-2xl font-medium leading-snug text-gray-900 sm:text-3xl">
              Quick access to the popular courses
            </h3>

            <a
              href="/course-one"
              className="mt-8 inline-block w-fit rounded-md bg-brand-orange px-8 py-3 text-sm font-medium text-gray-900 transition hover:bg-brand-yellow"
            >
              View Courses
            </a>
          </div>
        </div>

        {/* ---------- Card 2: Apply / Video ---------- */}
        <div className="grid min-h-[380px] items-center gap-8 rounded-3xl bg-gray-100 p-8 sm:grid-cols-2 sm:p-12">
          <div>
            <h3 className="text-2xl font-medium leading-snug text-gray-900 sm:text-3xl">
              Develop your skills online!
            </h3>

            <a
              href="/career"
              className="mt-8 inline-block w-fit rounded-md bg-brand-navy px-8 py-3 text-sm font-medium text-white transition hover:bg-brand-teal"
            >
              Apply Now
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <video
              src={VIDEO_URL}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;