import { useState } from "react";
import { FaStar, FaBookOpen, FaUserGraduate } from "react-icons/fa";

const IMG = "https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/";

const tabs = ["All", "Design", "Development", "Management", "Finance"];

const courses = [
  {
    title: "Crisis management and problem-solving strategies",
    category: "Management",
    rating: "4.88",
    reviews: "210",
    lessons: 6,
    students: "8k",
    price: "Free",
    image: `${IMG}6710c8cf232065a7046261dc_Course%20Image-7.webp`,
    href: "/crisis-management-and-problem-solving-strategies/course-details",
  },
  {
    title: "Advanced photoshop techniques for designers",
    category: "Design",
    rating: "5.00",
    reviews: "1.2K",
    lessons: 8,
    students: "25k",
    price: "Free",
    image: `${IMG}6710bcf4976ba1d072d8b476_Course%20Image-4-2.webp`,
    href: "/advanced-photoshop-techniques-for-designers/course-details",
  },
  {
    title: "Operations management and process improvement",
    category: "Finance",
    rating: "5.00",
    reviews: "812",
    lessons: 12,
    students: "23k",
    price: "Free",
    image: `${IMG}66eb9e25c4d132b7abc4dcb2_Course%20Small%20Image-8.webp`,
    href: "/operations-management-and-process-improvement/course-details",
  },
  {
    title: "Database integration with MongoDB",
    category: "Development",
    rating: "4.49",
    reviews: "756",
    lessons: 10,
    students: "7k",
    price: "$59",
    image: `${IMG}66eb9e1184c0c12d2244968d_Course%20Small%20Image-9.webp`,
    href: "/database-integration-with-mongodb/course-details",
  },
  {
    title: "Risk management and business continuity",
    category: "Management",
    rating: "4.88",
    reviews: "210",
    lessons: 3,
    students: "8k",
    price: "$49",
    image: `${IMG}66eb9e363f6e47ec5245cf09_Course%20Small%20Image-7.webp`,
    href: "/risk-management-and-business-continuity/course-details",
  },
  {
    title: "Full-stack development with the MERN stack",
    category: "Development",
    rating: "5.00",
    reviews: "985",
    lessons: 12,
    students: "22k",
    price: "$72",
    image: `${IMG}66eb9e61096e930736b651e4_Course%20Small%20Image-5.webp`,
    href: "/full-stack-development-with-the-mern-stack/course-details",
  },
];

const TopCourses = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? courses
      : courses.filter((course) => course.category === activeTab);

  return (
    <section className="bg-[#EEF5FB] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-gray-500">
              Online learning
            </p>
            <h2 className="mt-3 text-4xl font-medium text-gray-900 lg:text-5xl">
              Top online courses
            </h2>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-2 text-base">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`transition duration-300 ${
                  activeTab === tab
                    ? "font-medium text-gray-900"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                {tab === "All" ? "All courses" : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((course) => (
            <article
              key={course.title}
              className="group flex flex-col rounded-3xl bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)]"
            >
              {/* Image + price badge */}
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                    className="h-60 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>

                <span className="absolute -bottom-6 right-4 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-sm font-medium text-white shadow-lg transition-transform duration-500 group-hover:scale-110">
                  {course.price}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col px-3 pb-3 pt-9">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  {course.category}
                </p>

                <h3 className="mt-3 text-xl font-medium leading-snug text-gray-900">
                  <a
                    href={course.href}
                    className="transition-colors duration-300 hover:text-brand-orange"
                  >
                    {course.title}
                  </a>
                </h3>

                <div className="mt-3 flex items-center gap-2 text-sm">
                  <FaStar className="text-amber-400" />
                  <span className="font-medium text-gray-800">{course.rating}</span>
                  <span className="text-gray-400">({course.reviews})</span>
                </div>

                <div className="mt-6 grid grid-cols-2 divide-x divide-gray-200 border-t border-gray-200 pt-5 text-sm text-gray-600">
                  <span className="flex items-center justify-center gap-2 pr-4">
                    <FaBookOpen className="text-gray-400" />
                    {course.lessons} Lessons
                  </span>
                  <span className="flex items-center justify-center gap-2 pl-4">
                    <FaUserGraduate className="text-gray-400" />
                    {course.students} Enrolled
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-16 flex justify-center">
          <p className="w-full max-w-4xl rounded-full bg-brand-navy px-8 py-5 text-center text-base text-white">
            We assist you in finding the ideal tutor at no cost.{" "}
            <a
              href="/course-one"
              className="underline underline-offset-4 transition hover:text-brand-orange"
            >
              Browse All Available Courses
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopCourses;