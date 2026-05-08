import { useEffect, useState } from "react";

const links = [
  { name: "Hero", id: "hero" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [active, setActive] = useState<string>("hero");
  const [open, setOpen] = useState(false);

  // Smooth Scroll
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    const navbarOffset = 90;

    const top =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setOpen(false);
  };

  // Active Section on Scroll
  useEffect(() => {
    const handleActiveSection = () => {
      const scrollY = window.scrollY;

      links.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section) {
          const sectionTop = section.offsetTop - 140;
          const sectionHeight = section.offsetHeight;

          if (
            scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight
          ) {
            setActive(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleActiveSection);

    return () => {
      window.removeEventListener("scroll", handleActiveSection);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto max-w-6xl px-4 py-4">
        {/* Navbar */}
        <div className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-50/80 px-6 py-3 shadow-md backdrop-blur-sm">
          {/* Logo */}
          <h1 className="text-lg font-semibold tracking-tight text-zinc-800">
            Sheikh Asif Rahman
          </h1>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-2 md:flex">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  active === link.id
                    ? "bg-black text-white"
                    : "text-zinc-600 hover:bg-zinc-100"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl text-zinc-700 md:hidden"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-2 flex flex-col gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 shadow-md md:hidden">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
                  active === link.id
                    ? "bg-black text-white"
                    : "text-zinc-700 hover:bg-zinc-100"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;