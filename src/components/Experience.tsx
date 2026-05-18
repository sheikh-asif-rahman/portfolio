// components/Experience.tsx

const experiences = [
  {
    company: "Labaid Diagnostic Kolabagan",
    year: "May 2023 – Present",
    role: "Software Engineer | Executive IT",

    points: [
      "Developed and maintained a centralized HRMS platform supporting attendance, leave management, and employee operations across 34+ branches.",

      "Built and integrated RESTful APIs using Node.js for seamless frontend-backend communication.",

      "Designed scalable and responsive web applications using React.js, improving internal operational efficiency.",

      "Automated laboratory and diagnostic workflows, improving sample tracking and reporting accuracy.",

      "Diagnosed and resolved LIS / HIS system issues, reducing downtime and improving system reliability.",

      "Collaborated with cross-functional international development teams to deploy new modules and software upgrades.",

      "Provided system administration, troubleshooting, and remote technical support across multiple enterprise branches.",

      "Enhanced application performance, debugging workflows, and database query efficiency.",
    ],
  },

  {
    company: "Labaid Specialized Hospital",
    year: "Feb 2023 – Apr 2023",
    role: "IT Intern",

    points: [
      "Assisted in the implementation and configuration of Hospital Information System (HIS) modules for clinical and administrative workflows.",

      "Tested CRUD-based laboratory automation features, improving data entry accuracy and workflow efficiency.",

      "Supported the design and enhancement of IPD and OPD modules, streamlining patient information handling and service processes.",

      "Built a doctor profile and appointment management system for online healthcare service operations.",

      "Performed debugging, testing, and deployment support for newly boosted application features.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-zinc-50 py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
            Experience
          </h2>

          <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
            My professional journey and enterprise software development
            experience.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div
            className="
              hidden md:block
              absolute left-1/2 top-0
              h-full w-[2px]
              bg-gradient-to-b
              from-transparent
              via-zinc-300
              to-transparent
              -translate-x-1/2
            "
          />

          {/* Mobile Timeline Line */}
          <div
            className="
              md:hidden
              absolute left-4 top-0
              h-full w-[2px]
              bg-zinc-300
            "
          />

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`
                  relative
                  flex flex-col
                  gap-6

                  md:gap-0
                  md:flex-row
                  items-start

                  ${
                    index % 2 !== 0
                      ? "md:flex-row-reverse"
                      : ""
                  }
                `}
              >
                {/* Mobile Dot */}
                <div
                  className="
                    md:hidden
                    absolute
                    left-4 top-6
                    -translate-x-1/2

                    w-4 h-4
                    rounded-full
                    bg-blue-500
                    border-4 border-white
                    shadow-md
                    z-20
                  "
                />

                {/* LEFT CARD */}
                <div
                  className={`
                    w-full
                    md:w-[calc(50%-50px)]

                    ${
                      index % 2 === 0
                        ? "md:mr-[50px]"
                        : "md:ml-[50px]"
                    }

                    pl-10
                    md:pl-0
                  `}
                >
                  <div
                    className="
                      group
                      relative
                      rounded-3xl
                      border border-zinc-200
                      bg-white/80
                      backdrop-blur-md
                      p-6
                      shadow-sm

                      transition-all duration-300

                      hover:-translate-y-1
                      hover:shadow-2xl
                      hover:border-blue-200
                    "
                  >
                    {/* Glow */}
                    <div
                      className="
                        absolute inset-0 rounded-3xl
                        bg-gradient-to-r
                        from-blue-100/0
                        via-blue-100/20
                        to-cyan-100/0
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity duration-300
                      "
                    />

                    <div className="relative z-10">
                      <p className="text-sm font-medium text-blue-600">
                        {exp.year}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-zinc-900">
                        {exp.company}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Desktop Dot */}
                <div
                  className="
                    hidden md:flex
                    absolute
                    left-1/2 top-10
                    -translate-x-1/2

                    w-5 h-5
                    rounded-full
                    bg-blue-500
                    border-4 border-white
                    shadow-lg
                    z-20
                  "
                />

                {/* RIGHT CARD */}
                <div
                  className={`
                    w-full
                    md:w-[calc(50%-50px)]

                    ${
                      index % 2 === 0
                        ? "md:ml-[50px]"
                        : "md:mr-[50px]"
                    }

                    pl-10
                    md:pl-0
                  `}
                >
                  <div
                    className="
                      group
                      relative
                      rounded-3xl
                      border border-zinc-200
                      bg-white/80
                      backdrop-blur-md
                      p-6
                      shadow-sm

                      transition-all duration-300

                      hover:-translate-y-1
                      hover:shadow-2xl
                      hover:border-blue-200
                    "
                  >
                    {/* Glow */}
                    <div
                      className="
                        absolute inset-0 rounded-3xl
                        bg-gradient-to-r
                        from-blue-100/0
                        via-blue-100/20
                        to-cyan-100/0
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity duration-300
                      "
                    />

                    <div className="relative z-10">
                      {/* Role */}
                      <h4 className="text-xl font-semibold text-zinc-900">
                        {exp.role}
                      </h4>

                      {/* Details */}
                      <ul className="mt-5 space-y-3">
                        {exp.points.map((point, i) => (
                          <li
                            key={i}
                            className="
                              flex gap-3
                              text-zinc-600
                              leading-relaxed
                            "
                          >
                            <span
                              className="
                                mt-2
                                h-2 w-2
                                rounded-full
                                bg-blue-500
                                shrink-0
                              "
                            />

                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;