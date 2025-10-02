import { Link } from 'react-router-dom';
import { Home, Briefcase, Code, Award, GraduationCap } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Painel Administrativo
          </h1>
          <p className="text-slate-600">
            Gerencie o conteúdo do seu currículo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Briefcase className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Experiências
              </h3>
            </div>
            <p className="text-slate-600 mb-4">
              Gerencie suas experiências profissionais
            </p>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Gerenciar
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Code className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Projetos
              </h3>
            </div>
            <p className="text-slate-600 mb-4">
              Adicione e edite seus projetos
            </p>
            <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Gerenciar
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Award className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Habilidades
              </h3>
            </div>
            <p className="text-slate-600 mb-4">
              Gerencie suas competências técnicas
            </p>
            <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
              Gerenciar
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <GraduationCap className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Educação
              </h3>
            </div>
            <p className="text-slate-600 mb-4">
              Adicione sua formação acadêmica
            </p>
            <button className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
              Gerenciar
            </button>
          </div>
        </div>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition"
          >
            <Home size={20} />
            Voltar para Home
          </Link>
        </div>
      </div>
    </div>
  );
}