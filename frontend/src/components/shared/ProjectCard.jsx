import { ExternalLink, Github, Star } from 'lucide-react';
import Card from './Card';
import Badge from './Badge';

export default function ProjectCard({ project }) {
  return (
    <Card hover className="overflow-hidden h-full flex flex-col">
      {/* Project Image */}
      {project.image ? (
        <div className="relative h-48 bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {project.highlight && (
            <div className="absolute top-4 right-4">
              <Badge variant="gradient" className="flex items-center gap-1 shadow-lg">
                <Star className="w-4 h-4 fill-current" />
                Destaque
              </Badge>
            </div>
          )}
        </div>
      ) : (
        <div className="relative h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
          <div className="text-white text-6xl font-bold opacity-20">
            {project.title.charAt(0)}
          </div>
          {project.highlight && (
            <div className="absolute top-4 right-4">
              <Badge variant="gradient" className="flex items-center gap-1 shadow-lg">
                <Star className="w-4 h-4 fill-current" />
                Destaque
              </Badge>
            </div>
          )}
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {project.title}
        </h3>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.split(',').map((tech, index) => (
            <Badge key={index} variant="primary">
              {tech.trim()}
            </Badge>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4 flex-1 leading-relaxed">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 hover:shadow-lg flex-1"
            >
              <ExternalLink className="w-4 h-4" />
              Ver Projeto
            </a>
          )}
          
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex-1"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
