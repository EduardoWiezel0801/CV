import { Building2, MapPin, Calendar, ExternalLink } from 'lucide-react';
import Card from './Card';

export default function ExperienceCard({ experience }) {
  return (
    <Card hover className="p-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Company Logo */}
        {experience.company_logo && (
          <div className="flex-shrink-0">
            <img
              src={experience.company_logo}
              alt={experience.company}
              className="w-20 h-20 rounded-lg object-contain bg-gray-50 p-2 border border-gray-200"
            />
          </div>
        )}

        <div className="flex-1">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {experience.title}
            </h3>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-3">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-indigo-600" />
                {experience.company_url ? (
                  <a
                    href={experience.company_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-600 transition-colors flex items-center gap-1 font-medium"
                  >
                    {experience.company}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="font-medium">{experience.company}</span>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-indigo-600" />
                <span>{experience.period}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-600" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          {/* Company Description */}
          {experience.company_description && (
            <p className="text-gray-600 mb-4 italic bg-gray-50 p-3 rounded-lg border-l-4 border-indigo-500">
              {experience.company_description}
            </p>
          )}

          {/* Job Description */}
          <p className="text-gray-700 mb-4 leading-relaxed">
            {experience.description}
          </p>

          {/* Responsibilities */}
          {experience.responsibilities && experience.responsibilities.length > 0 && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-indigo-600 rounded"></span>
                Principais Responsabilidades:
              </h4>
              <ul className="space-y-2">
                {experience.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-indigo-600 mt-1 font-bold">▸</span>
                    <span className="text-gray-700">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
