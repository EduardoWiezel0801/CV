import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Briefcase, Code, GraduationCap, ArrowRight, Settings } from 'lucide-react';
import { personalInfoService } from '../../services/personalInfoService';
import Header from '../../components/layout/Header';
import LoadingSpinner from '../../components/shared/LoadingSpinner';

export default function Home() {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPersonalInfo();
  }, []);

  const loadPersonalInfo = async () => {
    try {
      const data = await personalInfoService.getAll();
      if (data && data.length > 0) {
        setPersonalInfo(data[0]);
      }
    } catch (error) {
      console.error('Error loading personal info:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Header personalInfo={personalInfo} />

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Meu Currículo
            </h2>
            <p className="text-xl text-gray-600">
              Conheça minha trajetória profissional, habilidades e projetos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Experiências */}
            <Link
              to="/curriculum#experiences"
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Experiências</h3>
              <p className="text-gray-600 mb-4">Minha trajetória profissional</p>
              <div className="flex items-center text-blue-600 font-medium">
                Ver mais <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            {/* Habilidades */}
            <Link
              to="/curriculum#skills"
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Habilidades</h3>
              <p className="text-gray-600 mb-4">Tecnologias e competências</p>
              <div className="flex items-center text-purple-600 font-medium">
                Ver mais <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            {/* Projetos */}
            <Link
              to="/curriculum#projects"
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Projetos</h3>
              <p className="text-gray-600 mb-4">Portfólio de trabalhos</p>
              <div className="flex items-center text-green-600 font-medium">
                Ver mais <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            {/* Formação */}
            <Link
              to="/curriculum#education"
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Formação</h3>
              <p className="text-gray-600 mb-4">Educação e certificações</p>
              <div className="flex items-center text-orange-600 font-medium">
                Ver mais <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/curriculum"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              Ver Currículo Completo
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-indigo-600 text-indigo-600 text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-50"
            >
              <Settings className="w-5 h-5" />
              Painel Admin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
