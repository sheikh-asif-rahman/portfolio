import SkillCard from "./Skill_Card";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVite,
} from "react-icons/si";

const skills = [
  {
    title: "React",
    subtitle: "Frontend",
    icon: <FaReact className="text-cyan-500" />,
  },
  {
    title: "HTML5",
    subtitle: "Frontend",
    icon: <FaHtml5 className="text-orange-500" />,
  },
  {
    title: "CSS3",
    subtitle: "Frontend",
    icon: <FaCss3Alt className="text-blue-500" />,
  },
  {
    title: "JavaScript",
    subtitle: "Frontend",
    icon: <FaJs className="text-yellow-400" />,
  },
  {
    title: "TypeScript",
    subtitle: "Frontend",
    icon: <SiTypescript className="text-blue-600" />,
  },
  {
    title: "Tailwind",
    subtitle: "Frontend",
    icon: <SiTailwindcss className="text-cyan-400" />,
  },
  {
    title: "Node.js",
    subtitle: "Backend",
    icon: <FaNodeJs className="text-green-500" />,
  },
  {
    title: "Express",
    subtitle: "Backend",
    icon: <SiExpress className="text-gray-700" />,
  },
  {
    title: "Python",
    subtitle: "Backend",
    icon: <FaPython className="text-yellow-500" />,
  },
  {
    title: "MongoDB",
    subtitle: "Backend",
    icon: <SiMongodb className="text-green-600" />,
  },
  {
    title: "Database",
    subtitle: "Backend",
    icon: <FaDatabase className="text-orange-500" />,
  },
  {
    title: "Git",
    subtitle: "Tooling",
    icon: <FaGitAlt className="text-orange-500" />,
  },
  {
    title: "GitHub",
    subtitle: "Tooling",
    icon: <FaGithub className="text-black" />,
  },
  {
    title: "Figma",
    subtitle: "Design Tool",
    icon: <FaFigma className="text-pink-500" />,
  },
  {
    title: "Postman",
    subtitle: "API Tool",
    icon: <SiPostman className="text-orange-400" />,
  },
  {
    title: "Vite",
    subtitle: "Build Tool",
    icon: <SiVite className="text-purple-500" />,
  },
];

const firstRow = skills.slice(0, 8);
const secondRow = skills.slice(8);

const Skills = () => {
  return (
    <section className="bg-zinc-50 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
            My Skills
          </h2>

          <p className="mt-4 text-zinc-600 text-sm md:text-base max-w-2xl mx-auto">
            Technologies and tools I use to build modern digital experiences.
          </p>
        </div>

        {/* Row 1 */}
        <div className="marquee-group mb-5">
          <div className="marquee-track marquee-left">
            {[...firstRow, ...firstRow].map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                subtitle={skill.subtitle}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="marquee-group">
          <div className="marquee-track marquee-right">
            {[...secondRow, ...secondRow].map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                subtitle={skill.subtitle}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-group {
          width: 100%;
          overflow: hidden;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          gap: 1rem;
        }

        .marquee-left {
          animation: slideLeft 28s linear infinite;
        }

        .marquee-right {
          animation: slideRight 28s linear infinite;
        }

        .marquee-left:hover,
        .marquee-right:hover {
          animation-play-state: paused;
        }

        @keyframes slideLeft {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes slideRight {
          0% {
            transform: translateX(-50%);
          }

          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;