import { useState, useEffect } from 'react';
import { MapPin, Mail, Linkedin, Github, Globe } from 'lucide-react';
import api from '@/services/api';

export default function Header() {
  const [personalInfo, setPersonalInfo] = useState(null);

  useEffect(() => {
    const fetchPersonalInfo = async () => {
      try {
        const response = await api.get('/personal-info/');
        setPersonalInfo(response.data.results[0]);
      } catch (error) {
        console.error('Erro ao buscar informações pessoais:', error);
      }
    };
    fetchPersonalInfo();
  }, []);

  if (!personalInfo) return null;

  return (
    <header className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8 md:p-12">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {personalInfo.photo && (
          <img
            src={personalInfo.photo}
            alt={personalInfo.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
        )}
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            {personalInfo.name}
          </h1>
          <p className="text-xl text-slate-300 mb-4">
            {personalInfo.title}
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{personalInfo.location}</span>
            </div>
            
            {personalInfo.email && (
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-slate-300 transition"
              >
                <Mail size={16} />
                <span>{personalInfo.email}</span>
              </a>
            )}
            
            {personalInfo.website && (
              <a
                href={personalInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-slate-300 transition"
              >
                <Globe size={16} />
                <span>Website</span>
              </a>
            )}
            
            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-slate-300 transition"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            )}
            
            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-slate-300 transition"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}