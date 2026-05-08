// components/Footer.tsx

import { FaGithub, FaLinkedin, FaFacebookF, FaWhatsapp } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="bg-white border-t border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Top */}
        <div
          className="
            flex flex-col
            md:flex-row
            items-center
            justify-between
            gap-8
          "
        >
          {/* Left */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-zinc-900">
              Sheikh Asif Rahman
            </h2>

            <p className="mt-2 text-zinc-500 text-sm md:text-base">
              Software Engineer & Full Stack Developer
            </p>
          </div>

          {/* Social Icons */}
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
      w-11 h-11 rounded-full border border-gray-300
      flex items-center justify-center
      text-gray-700 text-lg
      transition-all duration-300
      hover:bg-blue-600 hover:text-white
      hover:scale-110 hover:shadow-lg
    "
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
      w-11 h-11 rounded-full border border-gray-300
      flex items-center justify-center
      text-gray-700 text-lg
      transition-all duration-300
      hover:bg-black hover:text-white
      hover:scale-110 hover:shadow-lg
    "
            >
              <FaGithub />
            </a>

            <a
              href="https://wa.me/8801000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="
      w-11 h-11 rounded-full border border-gray-300
      flex items-center justify-center
      text-gray-700 text-lg
      transition-all duration-300
      hover:bg-green-500 hover:text-white
      hover:scale-110 hover:shadow-lg
    "
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
      w-11 h-11 rounded-full border border-gray-300
      flex items-center justify-center
      text-gray-700 text-lg
      transition-all duration-300
      hover:bg-blue-500 hover:text-white
      hover:scale-110 hover:shadow-lg
    "
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-[1px] w-full bg-zinc-200" />

        {/* Bottom */}
        <div
          className="
            flex flex-col
            md:flex-row
            items-center
            justify-between
            gap-3
          "
        >
          <p className="text-sm text-zinc-500 text-center md:text-left">
            © 2026 Sheikh Asif Rahman. All rights reserved.
          </p>

          <p className="text-sm text-zinc-400 text-center md:text-right">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
