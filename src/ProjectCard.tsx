import { FaGithub } from "react-icons/fa";


type ProjectCardProps = {
  image?: string;
  name: string;
  description: string;
  tags: string[];
  liveDemoUrl?: string;
  icon?: string;
  githubUrl?: string;
};

function ProjectCard({ image, name, description, tags, liveDemoUrl, icon, githubUrl }: ProjectCardProps) {
  return (
    <div className="bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-500 transition duration-300 hover:scale-[1.02] group">
      {/* Imagen */}
      <div className="h-40 bg-neutral-800 flex items-center justify-center">
        {image ? (
          <img src={image} alt={name} className="object-cover h-full w-full brightness-40 transition duration-1000 ease-in-out group-hover:brightness-100" />
        ) : (
          <span className="text-neutral-500 text-sm">Image</span>
        )}
      </div>

      {/* Contenido */}
      <div className="p-5">
        <h3 className="text-neutral-200 text-lg  mb-2">
          {name}
        </h3>

        <p className="text-neutral-400 text-sm mb-4">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span key={idx} className="text-xs bg-neutral-800 px-2 py-1 rounded-md text-neutral-400">
              {tag}
            </span>
          ))}
        </div>

        {/* Botones */}
        <div className="flex justify-between items-center">
          {liveDemoUrl ? (
            <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-teal-400 hover:underline cursor-pointer">
              Live Demo
            </a>
          ) : (
            <span className="text-sm text-neutral-500">No Demo</span>
          )}

          {githubUrl ? (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <FaGithub className='text-neutral-500 text-3xl hover:text-neutral-100 transition duration-300 ease-in-out hover:scale-105' />
            </a>
          ) : (
            <FaGithub className='text-neutral-500 text-3xl hover:text-neutral-100 transition duration-300 ease-in-out hover:scale-105' />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;