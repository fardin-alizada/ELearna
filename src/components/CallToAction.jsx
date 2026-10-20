const CallToAction = () => {
  return (
    <section className="relative z-10 -mb-24 bg-transparent px-5 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-sm bg-[#FFA726] p-10 shadow-xl sm:flex-row sm:items-center sm:justify-between lg:px-16 lg:py-12">
        <h2 className="text-2xl font-medium leading-snug text-[#7A3B0F] sm:text-3xl">
          Are you ready to start
          <br />
          your journey?
        </h2>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="/course-one"
            className="bg-gray-800 px-8 py-3 text-center text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-lg"
          >
            Browse Courses
          </a>

          <a
            href="/career"
            className="border border-[#7A3B0F] px-8 py-3 text-center text-sm font-medium text-[#7A3B0F] transition duration-300 hover:-translate-y-0.5 hover:bg-[#7A3B0F] hover:text-[#FFCB6B] hover:shadow-lg"
          >
            Became A Teacher
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;