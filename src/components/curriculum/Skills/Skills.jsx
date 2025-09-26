import { skills } from '../../../data/curriculumData';
import './Skills.css';

const SkillCategory = ({ category, data }) => {
  return (
    <div className={`skill-category ${data.highlight ? 'highlight' : ''}`}>
      <h4 className="skill-category-title">{data.title}</h4>
      <div className="skill-tags">
        {data.items.map((skill, index) => (
          <span 
            key={index} 
            className={`skill-tag ${data.highlight ? 'ai-tag' : ''}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="section-title">Competências Técnicas</h2>
      
      <div className="skills-grid">
        {Object.entries(skills).map(([key, data]) => (
          <SkillCategory key={key} category={key} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
