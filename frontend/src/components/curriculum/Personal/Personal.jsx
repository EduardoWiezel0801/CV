import { Heart, Target } from 'lucide-react';
import { personalInterests, professionalObjective } from '../../../data/curriculumData';
import './Personal.css';

const Personal = () => {
  return (
    <section className="personal-section">
      <div className="personal-grid">
        <div className="interests-card">
          <div className="card-header">
            <Heart size={24} />
            <h2 className="card-title">{personalInterests.title}</h2>
          </div>
          <div className="card-content">
            <p className="card-description">{personalInterests.description}</p>
          </div>
        </div>

        <div className="objective-card">
          <div className="card-header">
            <Target size={24} />
            <h2 className="card-title">{professionalObjective.title}</h2>
          </div>
          <div className="card-content">
            <p className="card-description">{professionalObjective.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personal;
