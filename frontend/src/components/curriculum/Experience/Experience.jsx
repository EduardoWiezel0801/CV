import { ExternalLink, MapPin, Calendar } from 'lucide-react';
import { experiences } from '../../../data/curriculumData';
import './Experience.css';

const ExperienceItem = ({ experience }) => {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <div className="job-info">
          <h3 className="job-title">{experience.title}</h3>
          <div className="company-info">
            <a 
              href={experience.companyUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="company-link"
            >
              {experience.company}
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
        <div className="period-location">
          <div className="period">
            <Calendar size={14} />
            <span>{experience.period}</span>
          </div>
          <div className="location">
            <MapPin size={14} />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>
      
      <div className="company-description">
        <strong>Sobre a empresa:</strong> {experience.companyDescription}
      </div>
      
      <p className="job-description">{experience.description}</p>
      
      <div className="responsibilities">
        <h4 className="responsibilities-title">Principais responsabilidades:</h4>
        <ul className="responsibilities-list">
          {experience.responsibilities.map((responsibility, index) => (
            <li key={index} className="responsibility-item">
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="section-title">Experiência Profissional</h2>
      
      <div className="experiences-container">
        {experiences.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
