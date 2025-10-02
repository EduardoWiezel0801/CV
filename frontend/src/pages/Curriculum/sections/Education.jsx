import { useState, useEffect } from 'react';
import { GraduationCap } from 'lucide-react';
import api from '@/services/api';

export default function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await api.get('/education/');
        setEducation(response.data.results);
      } catch (error) {
        console.error('Erro ao buscar educação:', error);
      }
    };
    fetchEducation();
  }, []);

  if (education.length === 0) return null;

  return (
    <section>
      <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-blue-600">
        Formação Acadêmica
      </h2>
      
      <div className="space-y-4">
        {education.map((item) => (
          <div
            key={item.id}
            className="border border-slate-200 rounded-lg p-6 bg-white hover:shadow-lg transition"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-600 text-white rounded-lg">
                <GraduationCap size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-lg text-blue-600 font-medium mb-3">
                  {item.institution}
                </p>
                <p className="text-slate-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}