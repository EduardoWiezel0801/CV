import { GraduationCap } from 'lucide-react';
import { education } from '../../../data/curriculumData';
import './Education.css';

const EducationItem = ({ item }) => {
  return (
    <div className="education-item">
      <div className="education-icon">
        <GraduationCap size={20} />
      </div>
      <div className="education-content">
        <h3 className="education-title">{item.title}</h3>
        <p className="education-institution">{item.institution}</p>
        <p className="education-description">{item.description}</p>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <section className="education-section">
      <h2 className="section-title">Formação Acadêmica</h2>
      
      <div className="education-container">
        {education.map((item) => (
          <EducationItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Education;
