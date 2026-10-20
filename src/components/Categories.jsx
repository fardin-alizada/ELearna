import {
  FaPenNib,
  FaMoneyBillWave,
  FaLaptopCode,
  FaBullhorn,
  FaCode,
  FaPenFancy,
} from "react-icons/fa";

const categories = [
  { title: "Creative web design", count: 8, icon: FaPenNib, href: "/category/design" },
  { title: "Finance accounting", count: 10, icon: FaMoneyBillWave, href: "/category/finance" },
  { title: "IT and software", count: 5, icon: FaLaptopCode, href: "/category/development" },
  { title: "Digital marketing", count: 4, icon: FaBullhorn, href: "/category/finance" },
  { title: "Web development", count: 8, icon: FaCode, href: "/category/development" },
  { title: "Content writing", count: 3, icon: FaPenFancy, href: "/category/design" },
];

const Categories = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-orange">
            Top Categories
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
            Discover leading categories to elevate your journey
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <a
                key={cat.title}
                href={cat.href}
                className="group flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-orange/60 hover:shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal text-2xl text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
                  <Icon />
                </div>

                <h3 className="mt-5 text-base font-semibold text-gray-900">
                  {cat.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {cat.count} Courses
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;