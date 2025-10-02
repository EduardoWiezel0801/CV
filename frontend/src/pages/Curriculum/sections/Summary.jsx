import { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';
import api from '@/services/api';

export default function Summary() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await api.get('/summary/');
        setSummary(response.data.results[0]);
      } catch (error) {
        console.error('Erro ao buscar resumo:', error);
      }
    };
    fetchSummary();
  }, []);

  if (!summary) return null;

  return (
    <section>
      <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-blue-600">
        Resumo Profissional
      </h2>
      
      <div className="space-y-4 text-slate-700">
        <p className="text-lg leading-relaxed">{summary.main}</p>
        <p className="text-lg leading-relaxed">{summary.secondary}</p>
      </div>
      
      <div className="mt-6 bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-500 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-orange-500 text-white rounded-lg">
            <Brain size={28} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-orange-900 mb-2">
              🤖 Especialização em Inteligência Artificial
            </h3>
            <p className="text-slate-700 leading-relaxed">
              {summary.ai_specialization}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}