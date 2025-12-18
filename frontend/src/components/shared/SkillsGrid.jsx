import { Sparkles } from 'lucide-react';
import Card from './Card';
import Badge from './Badge';

export default function SkillsGrid({ skills }) {
  // Agrupar skills por categoria
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categoryNames = {
    ai: 'Inteligência Artificial & Machine Learning',
    programming: 'Linguagens de Programação',
    frameworks: 'Frameworks & Tecnologias',
    systems: 'Sistemas Empresariais',
    management: 'Gestão & Liderança',
    tools: 'Ferramentas & Plataformas',
  };

  const categoryColors = {
    ai: 'from-purple-500 to-pink-500',
    programming: 'from-blue-500 to-cyan-500',
    frameworks: 'from-green-500 to-emerald-500',
    systems: 'from-orange-500 to-red-500',
    management: 'from-indigo-500 to-purple-500',
    tools: 'from-yellow-500 to-orange-500',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Object.entries(groupedSkills).map(([category, categorySkills]) => (
        <Card key={category} className="p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-1 h-8 bg-gradient-to-b ${categoryColors[category] || 'from-gray-500 to-gray-600'} rounded-full`}></div>
            <h3 className="text-xl font-bold text-gray-900">
              {categoryNames[category] || category}
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categorySkills.map((skill) => (
              <Badge
                key={skill.id}
                variant={skill.highlight ? 'gradient' : 'primary'}
                className={skill.highlight ? 'flex items-center gap-1 shadow-md' : ''}
              >
                {skill.highlight && <Sparkles className="w-3 h-3" />}
                {skill.name}
              </Badge>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
