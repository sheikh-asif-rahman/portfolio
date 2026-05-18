import profilePic from "../assets/profile_pic.jpeg";

import { FaLinkedin, FaGithub, FaWhatsapp, FaFacebook } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="
        scroll-mt-24
        min-h-[calc(100vh-80px)]
        flex items-center justify-center
        px-4 py-6 md:py-10
        bg-zinc-50
      "
    >
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-6 md:gap-10 items-center">
        {/* 🔹 LEFT CONTENT */}
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="text-blue-500 mb-3 text-sm font-medium tracking-wide">
            Hello!! I'm
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold tracking-tight text-gray-900 leading-[1.1]">
            <span className="text-gray-800">Sheikh</span>{" "}
            <span className="text-blue-600">Asif Rahman</span>
          </h1>

          <h2 className="mt-3 text-base md:text-lg font-medium text-gray-500 tracking-wide">
            Software Engineer
          </h2>

          <p className="mt-5 max-w-xl text-gray-500 text-base sm:text-lg leading-relaxed mx-auto lg:mx-0">
            I specialize in creating modern full stack applications with
            responsive design, scalable architecture, and seamless user
            experiences using React, Node.js, and contemporary web technologies.
          </p>

          {/* 🔹 BUTTONS */}
          <div className="mt-6 flex gap-4 flex-wrap justify-center md:justify-start">
            <a
              href="./Sheikh_Asif_Rahman.pdf"
              download="Sheikh_Asif_Rahman.pdf"
              className="
    px-6 py-3
    bg-black text-white
    rounded-xl
    font-medium
    transition-all duration-300 ease-out
    hover:bg-gray-900
    hover:scale-105
    hover:shadow-xl
    active:scale-95
  "
            >
              Grab My CV
            </a>
            {/* CONTACT BUTTON */}
            <a
              href="#contact"
              className="
                px-6 py-3
                border border-gray-300
                rounded-xl
                font-medium
                text-gray-700

                transition-all duration-300 ease-out

                hover:bg-gray-100
                hover:scale-105
                hover:shadow-md

                active:scale-95
              "
            >
              Contact
            </a>
          </div>

          {/* 🔹 SOCIAL LINKS */}
          <div className="mt-6 flex items-center gap-4 justify-center md:justify-start">
            {/* LINKEDIN */}
            <a
              href="https://linkedin.com/in/sheikh-asif-rahman7"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-11 h-11
                rounded-full
                border border-gray-300

                flex items-center justify-center

                text-gray-700 text-lg

                transition-all duration-300

                hover:bg-blue-600
                hover:text-white
                hover:scale-110
                hover:shadow-lg
              "
            >
              <FaLinkedin />
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/sheikh-asif-rahman"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-11 h-11
                rounded-full
                border border-gray-300

                flex items-center justify-center

                text-gray-700 text-lg

                transition-all duration-300

                hover:bg-black
                hover:text-white
                hover:scale-110
                hover:shadow-lg
              "
            >
              <FaGithub />
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/8801703632066"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-11 h-11
                rounded-full
                border border-gray-300

                flex items-center justify-center

                text-gray-700 text-lg

                transition-all duration-300

                hover:bg-green-500
                hover:text-white
                hover:scale-110
                hover:shadow-lg
              "
            >
              <FaWhatsapp />
            </a>

            {/* FACEBOOK */}
            <a
              href="#"
              className="
                w-11 h-11
                rounded-full
                border border-gray-300

                flex items-center justify-center

                text-gray-700 text-lg

                transition-all duration-300

                hover:bg-blue-500
                hover:text-white
                hover:scale-110
                hover:shadow-lg
              "
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* 🔹 RIGHT IMAGE */}
        <div className="flex justify-center w-full order-1 md:order-2">
          <div className="relative group">
            {/* GLOW */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 blur-2xl opacity-40"></div>

            {/* IMAGE */}
            <img
              src={profilePic}
              alt="Sheikh Asif Rahman"
              className="
                relative

                w-56 h-56
                sm:w-64 sm:h-64
                md:w-80 md:h-80

                object-cover
                rounded-full
                border-4 border-white
                shadow-2xl

                transition-all duration-500

                group-hover:scale-105
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
