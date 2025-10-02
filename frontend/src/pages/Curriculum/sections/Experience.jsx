import { useCurriculum } from '@/contexts/CurriculumContext';
import { ExternalLink, MapPin, Calendar } from 'lucide-react';

export default function Experience() {
  const { experiences } = useCurriculum();

  return (
    <section>
      <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-blue-600">
        Experiência Profissional
      </h2>
      
      <div className="space-y-6">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition bg-white"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                  {experience.title}
                </h3>
                <a
                  href={experience.company_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lg text-blue-600 hover:text-blue-700 font-medium"
                >
                  {experience.company}
                  <ExternalLink size={16} />
                </a>
              </div>
              
              <div className="flex flex-col gap-2 text-slate-600 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 border-l-4 border-blue-500 rounded p-4 mb-4">
              <p className="text-slate-700">
                <strong>Sobre a empresa:</strong> {experience.company_description}
              </p>
            </div>
            
            <p className="text-slate-700 mb-4 leading-relaxed">
              {experience.description}
            </p>
            
            {experience.responsibilities && experience.responsibilities.length > 0 && (
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">
                  Principais responsabilidades:
                </h4>
                <ul className="space-y-2">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-slate-700"
                    >
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}