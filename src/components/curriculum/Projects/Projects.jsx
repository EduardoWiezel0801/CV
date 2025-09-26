import { Star } from 'lucide-react';
import { projects } from '../../../data/curriculumData';
import './Projects.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={`project-card ${project.highlight ? 'highlight' : ''}`}>
      {project.highlight && (
        <div className="project-badge">
          <Star size={14} />
          <span>Destaque IA</span>
        </div>
      )}
      
      <div className="project-tech">{project.tech}</div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      
      {project.highlight && (
        <div className="project-highlight-indicator">
          <span>🚀 Projeto com IA</span>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projetos em Destaque</h2>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
