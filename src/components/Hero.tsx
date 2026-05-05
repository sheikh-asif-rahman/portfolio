import profilePic from "../assets/profile_pic.jpeg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-start justify-center px-4 pt-12 md:pt-16 bg-gradient-to-br from-white via-gray-50 to-gray-100"
    >
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-6 md:gap-10 items-center">
        {/* 🔹 LEFT CONTENT */}
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="text-blue-500 mb-3 text-sm font-medium tracking-wide">
            Hello! I'm
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold tracking-tight text-gray-900 leading-[1.1]">
            <span className="text-gray-800">Sheikh</span>{" "}
            <span className="text-blue-600">Asif Rahman</span>
          </h1>

          <h2 className="mt-3 text-base md:text-lg font-medium text-gray-500 tracking-wide">
            Software Engineer
          </h2>

          <p className="mt-5 text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
            Building elegant solutions to complex problems with modern
            technologies.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 flex-wrap justify-center md:justify-start">
            <a
              href="/cv.pdf"
              download
              className="px-6 py-3 bg-black text-white rounded-xl font-medium 
              transition-all duration-300 ease-out 
              hover:bg-gray-900 hover:scale-105 hover:shadow-xl 
              active:scale-95"
            >
              Grab My CV
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 
              transition-all duration-300 ease-out 
              hover:bg-gray-100 hover:scale-105 hover:shadow-md 
              active:scale-95"
            >
              Contact
            </a>
          </div>
        </div>

        {/* 🔹 RIGHT IMAGE */}
        <div className="flex justify-center w-full order-1 md:order-2">
          <div className="relative group">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 blur-2xl opacity-40"></div>

            {/* Image */}
            <img
              src={profilePic}
              alt="Sheikh Asif Rahman"
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-2xl 
              transition-all duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
