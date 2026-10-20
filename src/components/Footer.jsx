const LOGO_URL =
  "https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bf82fe9cef5f78d65_Elearna.svg";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Career", href: "/career" },
  { label: "Instructor", href: "/team" },
];

const popularCourses = [
  { label: "Finance", href: "/category/finance" },
  { label: "Management", href: "/category/management" },
  { label: "Design", href: "/category/design" },
  { label: "Web development", href: "/category/development" },
];

const company = [
  { label: "About", href: "/about-one" },
  { label: "Courses", href: "/course-two" },
  { label: "Blog", href: "/blog-one" },
  { label: "Contact", href: "/contact-one" },
  { label: "License", href: "/information/license" },
  { label: "Pricing", href: "/pricing-one" },
  { label: "404", href: "/404" },
];

const cms = [
  { label: "Course details", href: "/grow-your-brand-and-reach-your-audience/course-details" },
  { label: "Instructor details", href: "/team-members/lee-schmitt" },
  { label: "Blog details", href: "/blog-posts/the-evolution-of-teaching-tools-in-the-21st-century" },
];

const LinkColumn = ({ title, links }) => (
  <div>
    <h4 className="text-base font-semibold text-white">{title}</h4>
    <ul className="mt-6 flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-sm text-white/70 transition duration-300 hover:translate-x-1 hover:text-brand-orange"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-brand-teal via-[#0b2f38] to-brand-navy pb-10 pt-40 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/">
              <img src={LOGO_URL} alt="Elearna" className="h-8 w-auto" />
            </a>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/70">
              Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis
              eget amet ut tristique cras.
            </p>
          </div>

          <LinkColumn title="Quick links" links={quickLinks} />
          <LinkColumn title="Popular courses" links={popularCourses} />
          <LinkColumn title="Company" links={company} />
          <LinkColumn title="CMS" links={cms} />
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-wider text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Design by{" "}
            <a
              href="http://radianttemplates.com/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-white transition hover:text-brand-orange"
            >
              Radiant Templates
            </a>
          </p>
          <p>
            Powered by{" "}
            <a
              href="https://webflow.com/?r=0"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-white transition hover:text-brand-orange"
            >
              Webflow
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;