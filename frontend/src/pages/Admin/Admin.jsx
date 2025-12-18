import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  User, Briefcase, Code, FileText, GraduationCap, 
  Plus, Edit, Trash2, Image as ImageIcon, Home, LogOut 
} from 'lucide-react';
import { authService } from '../../services/authService';
import { personalInfoService } from '../../services/personalInfoService';
import { experienceService } from '../../services/experienceService';
import { skillService } from '../../services/skillService';
import { projectService } from '../../services/projectService';
import { educationService } from '../../services/educationService';
import Card from '../../components/shared/Card';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import BackButton from '../../components/shared/BackButton';
import PersonalInfoModal from '../../components/admin/PersonalInfoModal';

export default function Admin() {
  const navigate = useNavigate();
  const [personalInfo, setPersonalInfo] = useState(null);
  const [showPersonalInfoModal, setShowPersonalInfoModal] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAllData();
  }, []);

  const handleLogout = async () => {
    try {
      await authService.logout();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
      navigate('/login');
    }
  };

  const loadAllData = async () => {
    try {
      setLoading(true);
      const [personalData, experiencesData, skillsData, projectsData, educationData] = await Promise.all([
        personalInfoService.getAll(),
        experienceService.getAll(),
        skillService.getAll(),
        projectService.getAll(),
        educationService.getAll(),
      ]);

      setPersonalInfo(personalData?.[0] || null);
      setExperiences(experiencesData || []);
      setSkills(skillsData || []);
      setProjects(projectsData || []);
      setEducation(educationData || []);
    } catch (error) {
      console.error('Error loading data:', error);
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
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Painel Administrativo</h1>
            <p className="text-indigo-100">Gerencie todo o conteúdo do seu currículo</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg transition-all duration-300"
          >
            <LogOut className="w-5 h-5" />
            Sair
          </button>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <BackButton />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        {/* Personal Info Section */}
        <Card className="p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Informações Pessoais</h2>
                <p className="text-gray-600">Seus dados básicos e foto de perfil</p>
              </div>
            </div>
            <button 
              onClick={() => setShowPersonalInfoModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              {personalInfo ? <Edit className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              {personalInfo ? 'Editar' : 'Adicionar'}
            </button>
          </div>
          
          {personalInfo ? (
            <div className="flex items-start gap-6">
              {personalInfo.photo && (
                <img src={personalInfo.photo} alt={personalInfo.name} className="w-24 h-24 rounded-full object-cover" />
              )}
              <div>
                <h3 className="text-xl font-bold text-gray-900">{personalInfo.name}</h3>
                <p className="text-gray-600">{personalInfo.title}</p>
                <p className="text-gray-500 text-sm mt-2">{personalInfo.location}</p>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Nenhuma informação cadastrada</p>
          )}
        </Card>

        {/* Experiences Section */}
        <Card className="p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Experiências</h2>
                <p className="text-gray-600">{experiences.length} experiência(s) cadastrada(s)</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
              Adicionar
            </button>
          </div>
          
          <div className="space-y-4">
            {experiences.map((exp) => (
              <div key={exp.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  {exp.company_logo && (
                    <img src={exp.company_logo} alt={exp.company} className="w-12 h-12 rounded object-contain" />
                  )}
                  <div>
                    <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                    <p className="text-sm text-gray-600">{exp.company} • {exp.period}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Skills Section */}
        <Card className="p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Habilidades</h2>
                <p className="text-gray-600">{skills.length} habilidade(s) cadastrada(s)</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <Plus className="w-4 h-4" />
              Adicionar
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 20).map((skill) => (
              <span key={skill.id} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                {skill.name}
              </span>
            ))}
            {skills.length > 20 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                +{skills.length - 20} mais
              </span>
            )}
          </div>
        </Card>

        {/* Projects Section */}
        <Card className="p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Projetos</h2>
                <p className="text-gray-600">{projects.length} projeto(s) cadastrado(s)</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Plus className="w-4 h-4" />
              Adicionar
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div key={project.id} className="border border-gray-200 rounded-lg overflow-hidden">
                {project.image && (
                  <img src={project.image} alt={project.title} className="w-full h-32 object-cover" />
                )}
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{project.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{project.tech}</p>
                  <div className="flex gap-2">
                    <button className="flex-1 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded transition-colors">
                      Editar
                    </button>
                    <button className="flex-1 py-1 text-sm text-red-600 hover:bg-red-50 rounded transition-colors">
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Education Section */}
        <Card className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Formação Acadêmica</h2>
                <p className="text-gray-600">{education.length} formação(ões) cadastrada(s)</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
              <Plus className="w-4 h-4" />
              Adicionar
            </button>
          </div>
          
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">{edu.title}</h4>
                  <p className="text-sm text-gray-600">{edu.institution}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Modals */}
      <PersonalInfoModal
        isOpen={showPersonalInfoModal}
        onClose={() => setShowPersonalInfoModal(false)}
        personalInfo={personalInfo}
        onSave={async (data) => {
          try {
            if (personalInfo) {
              await personalInfoService.update(personalInfo.id, data);
            } else {
              await personalInfoService.create(data);
            }
            await loadAllData();
          } catch (error) {
            console.error('Error:', error);
            throw error;
          }
        }}
      />
    </div>
  );
}
