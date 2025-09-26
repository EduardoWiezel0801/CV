import { Brain } from 'lucide-react';
import { summary } from '../../../data/curriculumData';
import './Summary.css';

const Summary = () => {
  return (
    <section className="summary-section">
      <h2 className="section-title">Resumo Profissional</h2>
      
      <div className="summary-content">
        <p className="summary-paragraph">{summary.main}</p>
        <p className="summary-paragraph">{summary.secondary}</p>
      </div>
      
      <div className="ai-highlight">
        <div className="ai-icon">
          <Brain size={24} />
        </div>
        <div className="ai-content">
          <h4 className="ai-title">🤖 Especialização em Inteligência Artificial</h4>
          <p className="ai-description">{summary.aiSpecialization}</p>
        </div>
      </div>
    </section>
  );
};

export default Summary;
