import { useState } from "react";
import { HiChevronDown, HiMenu, HiX, HiShoppingBag } from "react-icons/hi";

const LOGO_URL =
  "https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bf82fe9cef5f78d65_Elearna.svg";

const navItems = [
  { label: "Home", children: ["Home One", "Home Two", "Home Three"] },
  { label: "Courses", children: ["Free Courses", "Paid Courses"] },
  {
    label: "Pages",
    children: ["About", "FAQ", "Pricing", "Career", "Events", "Team"],
  },
  { label: "Blog", children: ["Blog One", "Blog Two", "Blog Three"] },
  { label: "Contact", children: ["Contact One", "Contact Two", "Contact Three"] },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-brand-teal/95 backdrop-blur-md shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <img src={LOGO_URL} alt="Elearna" className="h-8 w-auto" />
        </a>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.label} className="group relative">
              <button className="flex items-center gap-1 text-[15px] font-medium text-white transition hover:text-brand-orange">
                {item.label}
                <HiChevronDown className="transition duration-200 group-hover:rotate-180" />
              </button>

              {/* Dropdown */}
              <div className="invisible absolute left-0 top-full pt-4 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100">
                <ul className="w-48 rounded-xl bg-white py-2 shadow-xl">
                  {item.children.map((child) => (
                    <li key={child}>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-100 hover:text-brand-teal"
                      >
                        {child}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button
            aria-label="Cart"
            className="relative rounded-full p-2 text-white transition hover:bg-white/10"
          >
            <HiShoppingBag className="text-xl" />
            <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-brand-orange" />
          </button>

          <div className="hidden items-center gap-2 text-sm font-medium text-white lg:flex">
            <a href="#" className="transition hover:text-brand-orange">
              Login
            </a>
            <span className="text-white/50">|</span>
            <a href="#" className="transition hover:text-brand-orange">
              Register
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="rounded-md p-2 text-2xl text-white lg:hidden"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mx-4 rounded-2xl bg-brand-teal/95 p-5 shadow-xl backdrop-blur lg:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <p className="font-semibold text-white">{item.label}</p>
                <ul className="mt-2 flex flex-col gap-2 border-l border-white/20 pl-4">
                  {item.children.map((child) => (
                    <li key={child}>
                      <a href="#" className="text-sm text-white/75 hover:text-brand-orange">
                        {child}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-3 border-t border-white/20 pt-5 text-white">
            <a href="#" className="font-medium hover:text-brand-orange">
              Login
            </a>
            <span className="text-white/50">|</span>
            <a href="#" className="font-medium hover:text-brand-orange">
              Register
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;