import { useState } from "react";

const links = [
  { name: "Hero", id: "hero" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [active, setActive] = useState<string>("hero");
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        
        {/* Floating container */}
        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-2xl px-6 py-3 shadow-md">

          {/* Logo */}
          <h1 className="text-lg font-semibold text-gray-800">
            Sheikh Asif Rahman
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2 text-sm font-medium">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActive(link.id)}
                className={`px-3 py-2 rounded-full transition ${
                  active === link.id
                    ? "bg-black text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-gray-700"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-2 bg-white border border-gray-200 rounded-2xl shadow-md p-4 flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => {
                  setActive(link.id);
                  setOpen(false);
                }}
                className={`px-4 py-2 rounded-full ${
                  active === link.id
                    ? "bg-black text-white"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;