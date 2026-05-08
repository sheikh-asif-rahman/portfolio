// components/Projects.tsx

import Card from "./Project_Card";

import { FaReact, FaPython, FaNodeJs, FaDatabase } from "react-icons/fa";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Modern Portfolio",
    description: "Responsive portfolio website with animations and clean UI.",
    technologies: [
      {
        name: "React",
        icon: <FaReact className="text-cyan-500" />,
      },
      {
        name: "Node",
        icon: <FaNodeJs className="text-green-500" />,
      },
    ],
    liveLink: "#",
    codeLink: "#",
  },

  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    title: "AI Dashboard",
    description: "Modern analytics dashboard with AI-powered automation.",
    technologies: [
      {
        name: "Python",
        icon: <FaPython className="text-yellow-500" />,
      },
      {
        name: "Database",
        icon: <FaDatabase className="text-orange-500" />,
      },
    ],
    liveLink: "#",
    codeLink: "#",
  },

  {
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    title: "Task Manager",
    description: "Task management app with authentication and drag-drop.",
    technologies: [
      {
        name: "React",
        icon: <FaReact className="text-cyan-500" />,
      },
      {
        name: "Node",
        icon: <FaNodeJs className="text-green-500" />,
      },
    ],
    liveLink: "#",
    codeLink: "#",
  },

  {
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
    title: "E-Commerce App",
    description: "Modern ecommerce platform with payment integration.",
    technologies: [
      {
        name: "React",
        icon: <FaReact className="text-cyan-500" />,
      },
      {
        name: "Python",
        icon: <FaPython className="text-yellow-500" />,
      },
    ],
    liveLink: "#",
    codeLink: "#",
  },

  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    title: "Developer Tools",
    description: "Collection of productivity tools for developers.",
    technologies: [
      {
        name: "Python",
        icon: <FaPython className="text-yellow-500" />,
      },
    ],
    liveLink: "#",
    codeLink: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-zinc-50 px-4 py-10 md:py-14"
    >
      <div className="mx-auto w-full max-w-[1900px]">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-zinc-900">
            Featured Projects
          </h2>

          <p className="mt-3 text-sm text-zinc-600">
            A collection of modern applications, creative solutions, and
            real-world development work.
          </p>
        </div>

        {/* Responsive Grid */}
        <div
          className="
            grid
            gap-6

            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            2xl:grid-cols-4
          "
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              liveLink={project.liveLink}
              codeLink={project.codeLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
