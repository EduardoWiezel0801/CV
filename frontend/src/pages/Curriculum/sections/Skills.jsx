import { useCurriculum } from '@/contexts/CurriculumContext';

export default function Skills() {
  const { skills } = useCurriculum();

  return (
    <section>
      <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-blue-600">
        Competências Técnicas
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([key, category]) => (
          <div
            key={key}
            className={`p-6 rounded-lg border-2 ${
              category.highlight
                ? 'bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-300'
                : 'bg-white border-slate-200'
            }`}
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                    category.highlight
                      ? 'bg-orange-600 text-white'
                      : 'bg-slate-700 text-white'
                  }`}
                >
                  {typeof skill === 'string' ? skill : skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}