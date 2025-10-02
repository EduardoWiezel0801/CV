import { useState, useEffect } from 'react';
import { Heart, Target } from 'lucide-react';
import api from '@/services/api';

export default function Personal() {
  const [personalInterest, setPersonalInterest] = useState(null);
  const [professionalObjective, setProfessionalObjective] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [interestRes, objectiveRes] = await Promise.all([
          api.get('/personal-interests/'),
          api.get('/professional-objectives/'),
        ]);
        setPersonalInterest(interestRes.data.results[0]);
        setProfessionalObjective(objectiveRes.data.results[0]);
      } catch (error) {
        console.error('Erro ao buscar dados pessoais:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="space-y-6">
      {personalInterest && (
        <div className="border border-slate-200 rounded-lg p-6 bg-white">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-600 text-white rounded-lg">
              <Heart size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                {personalInterest.title}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {personalInterest.description}
              </p>
            </div>
          </div>
        </div>
      )}
      
      {professionalObjective && (
        <div className="border border-slate-200 rounded-lg p-6 bg-white">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-600 text-white rounded-lg">
              <Target size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                {professionalObjective.title}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {professionalObjective.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}