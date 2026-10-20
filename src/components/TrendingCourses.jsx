import { FaStar } from "react-icons/fa";

const IMG = "https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/";

const courses = [
  {
    title: "Building single page applications with angular",
    category: "Development",
    rating: "5.00",
    reviews: "328",
    price: "Free",
    image: `${IMG}66eb9dfb3e87f8984b5a15b6_Course%20Small%20Image.webp`,
    href: "/building-single-page-applications-with-angular/course-details",
  },
  {
    title: "Database integration with MongoDB",
    category: "Development",
    rating: "4.49",
    reviews: "756",
    price: "$59",
    image: `${IMG}66eb9e1184c0c12d2244968d_Course%20Small%20Image-9.webp`,
    href: "/database-integration-with-mongodb/course-details",
  },
  {
    title: "Risk management and business continuity",
    category: "Management",
    rating: "4.88",
    reviews: "210",
    price: "$49",
    image: `${IMG}66eb9e363f6e47ec5245cf09_Course%20Small%20Image-7.webp`,
    href: "/risk-management-and-business-continuity/course-details",
  },
  {
    title: "Full-stack development with the MERN stack",
    category: "Development",
    rating: "5.00",
    reviews: "985",
    price: "$72",
    image: `${IMG}66eb9e61096e930736b651e4_Course%20Small%20Image-5.webp`,
    href: "/full-stack-development-with-the-mern-stack/course-details",
  },
];

const TrendingCourses = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div>
          <p className="text-sm uppercase tracking-[0.15em] text-gray-500">
            Trending courses
          </p>
          <h2 className="mt-3 text-4xl font-medium text-gray-900 lg:text-5xl">
            Explore our top programs
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <article
              key={course.title}
              className="group flex flex-col rounded-2xl bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)]"
            >
              {/* Image + price badge */}
              <div className="relative">
                <div className="overflow-hidden rounded-t-2xl">
                  <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>

                <span className="absolute right-4 top-4 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-sm font-medium text-white shadow-lg transition-transform duration-500 group-hover:scale-110">
                  {course.price}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
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

                <div className="mt-4 flex items-center gap-2 text-sm">
                  <FaStar className="text-amber-400" />
                  <span className="font-medium text-gray-800">{course.rating}</span>
                  <span className="text-gray-400">({course.reviews})</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCourses;