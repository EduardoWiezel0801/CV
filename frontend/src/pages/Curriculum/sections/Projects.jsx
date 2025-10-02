import { useCurriculum } from '@/contexts/CurriculumContext';
import { Star } from 'lucide-react';

export default function Projects() {
  const { projects } = useCurriculum();

  return (
    <section>
      <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-blue-600">
        Projetos em Destaque
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`p-6 rounded-lg border-2 hover:shadow-lg transition ${
              project.highlight
                ? 'bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-300'
                : 'bg-white border-slate-200'
            }`}
          >
            {project.highlight && (
              <div className="flex items-center gap-2 text-orange-600 font-semibold mb-3 text-sm">
                <Star size={16} className="fill-orange-600" />
                <span>Destaque IA</span>
              </div>
            )}
            
            <div className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full mb-3">
              {project.tech}
            </div>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              {project.title}
            </h3>
            
            <p className="text-slate-700 leading-relaxed">
              {project.description}
            </p>
            
            {project.highlight && (
              <div className="mt-4 px-3 py-2 bg-gradient-to-r from-orange-600 to-yellow-600 text-white text-center rounded-lg text-sm font-medium">
                🚀 Projeto com IA
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}