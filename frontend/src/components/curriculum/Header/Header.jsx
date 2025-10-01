import { MapPin, Globe, Linkedin, Github, Calendar } from 'lucide-react';
import { personalInfo } from '../../../data/curriculumData';
// ✅ ADICIONAR: Import da foto
import eduardoPhoto from '../../../assets/images/eduardo-photo.jpg';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-background"></div>
      <div className="header-content">
        <div className="photo-section">
          <div className="photo-container">
            {/* ✅ CORRIGIDO: Usar eduardoPhoto em vez de personalInfo.photo */}
            <img 
              src={eduardoPhoto} 
              alt={personalInfo.name}
              className="profile-photo"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          </div>
        </div>
        
        <div className="header-info">
          <h1 className="name">{personalInfo.name}</h1>
          <p className="title">{personalInfo.title}</p>
          
          <div className="contact-grid">
            <div className="contact-item">
              <MapPin size={16} />
              <span>{personalInfo.location}</span>
            </div>
            
            {personalInfo.age && (
              <div className="contact-item">
                <Calendar size={16} />
                <span>{personalInfo.age} anos</span>
              </div>
            )}
            
            <div className="contact-item">
              <Globe size={16} />
              <a 
                href={personalInfo.contacts.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                tesseratointegra.com.br
              </a>
            </div>
            
            <div className="contact-item">
              <Linkedin size={16} />
              <a 
                href={personalInfo.contacts.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                LinkedIn
              </a>
            </div>
            
            <div className="contact-item">
              <Github size={16} />
              <a 
                href={personalInfo.contacts.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;