import SkillCard from "./Skill_Card";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaAndroid
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiDjango,
  SiFlutter,
  SiFirebase,
  SiMysql,
  SiBootstrap,
  SiDart,
  SiMongodb,
  SiPostman,
  SiVite,
  SiNextdotjs,
  SiExpress,
  SiFigma,
  SiNpm,
  SiNetlify,
  SiVercel,
  SiRender,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  // PROGRAMMING
  {
    title: "JavaScript",
    subtitle: "Programming",
    icon: <FaJs className="text-yellow-400" />,
  },
  {
    title: "TypeScript",
    subtitle: "Programming",
    icon: <SiTypescript className="text-blue-600" />,
  },
  {
    title: "Python",
    subtitle: "Programming",
    icon: <FaPython className="text-blue-500" />,
  },
  {
    title: "Dart",
    subtitle: "Programming",
    icon: <SiDart className="text-cyan-500" />,
  },
  {
    title: "SQL",
    subtitle: "Programming",
    icon: <SiMysql className="text-blue-600" />,
  },

  // FRONTEND
  {
    title: "React.js",
    subtitle: "Frontend",
    icon: <FaReact className="text-cyan-500" />,
  },
  {
    title: "Next.js",
    subtitle: "Frontend",
    icon: <SiNextdotjs className="text-black" />,
  },
  {
    title: "Flutter",
    subtitle: "Frontend",
    icon: <SiFlutter className="text-sky-500" />,
  },
  {
    title: "Tailwind CSS",
    subtitle: "Frontend",
    icon: <SiTailwindcss className="text-cyan-400" />,
  },
  {
    title: "Bootstrap",
    subtitle: "Frontend",
    icon: <SiBootstrap className="text-purple-500" />,
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

  // BACKEND
  {
    title: "Node.js",
    subtitle: "Backend",
    icon: <FaNodeJs className="text-green-500" />,
  },
  {
    title: "Express.js",
    subtitle: "Backend",
    icon: <SiExpress className="text-zinc-700" />,
  },
  {
    title: "Django",
    subtitle: "Backend",
    icon: <SiDjango className="text-green-700" />,
  },
  {
    title: "REST APIs",
    subtitle: "Backend",
    icon: <FaNodeJs className="text-green-600" />,
  },
  {
    title: "Authentication",
    subtitle: "Backend",
    icon: <FaNodeJs className="text-zinc-700" />,
  },

  // DATABASES
  {
    title: "MongoDB",
    subtitle: "Database",
    icon: <SiMongodb className="text-green-600" />,
  },
  {
    title: "Firebase",
    subtitle: "Database",
    icon: <SiFirebase className="text-yellow-500" />,
  },
  {
    title: "SQL Server",
    subtitle: "Database",
    icon: <SiMysql className="text-blue-500" />,
  },

  // TOOLS & PLATFORMS
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
    title: "Postman",
    subtitle: "API Tool",
    icon: <SiPostman className="text-orange-500" />,
  },
  {
    title: "Vite",
    subtitle: "Build Tool",
    icon: <SiVite className="text-purple-500" />,
  },
{
  title: "VS Code",
  subtitle: "Editor",
  icon: <VscVscode className="text-blue-500" />,
},
{
  title: "Android Studio",
  subtitle: "Editor",
  icon: <FaAndroid className="text-green-500" />,
},
{
  title: "Kali Linux",
  subtitle: "Platform",
  icon: <FaLinux className="text-sky-500" />,
},
  {
    title: "Linux Ubuntu",
    subtitle: "Platform",
    icon: <FaLinux className="text-zinc-800" />,
  },
  {
    title: "Figma",
    subtitle: "Design Tool",
    icon: <SiFigma className="text-pink-500" />,
  },
  {
    title: "NPM",
    subtitle: "Package Manager",
    icon: <SiNpm className="text-red-500" />,
  },
  {
    title: "Netlify",
    subtitle: "Deployment",
    icon: <SiNetlify className="text-cyan-500" />,
  },
  {
    title: "Vercel",
    subtitle: "Deployment",
    icon: <SiVercel className="text-black" />,
  },
  {
    title: "Render",
    subtitle: "Deployment",
    icon: <SiRender className="text-purple-500" />,
  },

  // CONCEPTS
  {
    title: "Data Structures",
    subtitle: "Concept",
    icon: <FaPython className="text-indigo-500" />,
  },
  {
    title: "OOP",
    subtitle: "Concept",
    icon: <FaPython className="text-pink-500" />,
  },
  {
    title: "Agile / Scrum",
    subtitle: "Concept",
    icon: <FaReact className="text-cyan-500" />,
  },
  {
    title: "SDLC",
    subtitle: "Concept",
    icon: <FaNodeJs className="text-green-500" />,
  },
  {
    title: "Debugging",
    subtitle: "Concept",
    icon: <FaJs className="text-yellow-400" />,
  },
  {
    title: "Responsive Design",
    subtitle: "Concept",
    icon: <FaReact className="text-blue-500" />,
  },
  {
    title: "Performance",
    subtitle: "Optimization",
    icon: <FaNodeJs className="text-green-600" />,
  },
];

const firstRow = skills.slice(0, 18);
const secondRow = skills.slice(18);

const Skills = () => {
  return (
    <section id="skills" className="bg-zinc-50 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADING */}
        <div className="text-center mb-10 px-4">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Technical Skills
          </h2>

          <p className="mt-4 text-zinc-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Technologies, tools, and software engineering concepts I use to
            build scalable modern applications and digital experiences.
          </p>
        </div>

        {/* ROW 1 */}
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

        {/* ROW 2 */}
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
          animation: slideLeft 34s linear infinite;
        }

        .marquee-right {
          animation: slideRight 34s linear infinite;
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