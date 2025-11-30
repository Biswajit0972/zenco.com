const LINKS = ["Home", "About Us", "Services", "Blog", "Contact"];

const NavLinks = () => {
  return (
    <nav aria-label="Primary">
      <ul className="flex flex-wrap items-center gap-6 text-sm font-medium text-white/80 md:gap-8">
        {LINKS.map((link) => (
          <li key={link}>
            <a
              href="#"
              className={`transition-colors hover:text-white ${
                link === "Home"
                  ? "relative text-white after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-lime-300"
                  : ""
              }`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;



