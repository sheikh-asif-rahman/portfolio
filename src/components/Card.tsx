// components/Card.tsx

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Technology {
  name: string;
  icon: React.ReactNode;
}

interface CardProps {
  image: string;
  title: string;
  description: string;
  technologies: Technology[];
  liveLink: string;
  codeLink: string;
}

const Card = ({
  image,
  title,
  description,
  technologies,
  liveLink,
  codeLink,
}: CardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        
        {/* Title */}
        <h3 className="mb-2 text-lg font-bold text-zinc-900">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-4 text-xs leading-relaxed text-zinc-600">
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-5 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-100 px-2.5 py-1 text-[11px] text-zinc-700"
            >
              <span className="text-sm">{tech.icon}</span>
              {tech.name}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-black px-3 py-2 text-[11px] font-medium text-white transition-all duration-300 hover:bg-zinc-800"
          >
            <FaExternalLinkAlt className="text-[10px]" />
            Live Demo
          </a>

          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-zinc-300 bg-white px-3 py-2 text-[11px] font-medium text-zinc-800 transition-all duration-300 hover:bg-zinc-100"
          >
            <FaGithub className="text-xs" />
            Code
          </a>

        </div>
      </div>
    </div>
  );
};

export default Card;