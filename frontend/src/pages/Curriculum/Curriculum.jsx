import { useEffect, useState } from 'react';
import { Briefcase, Code, FileText, GraduationCap } from 'lucide-react';
import { personalInfoService } from '../../services/personalInfoService';
import { experienceService } from '../../services/experienceService';
import { skillService } from '../../services/skillService';
import { projectService } from '../../services/projectService';
import { educationService } from '../../services/educationService';
import Header from '../../components/layout/Header';
import Section from '../../components/shared/Section';
import ExperienceCard from '../../components/shared/ExperienceCard';
import ProjectCard from '../../components/shared/ProjectCard';
import SkillsGrid from '../../components/shared/SkillsGrid';
import Card from '../../components/shared/Card';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import ErrorMessage from '../../components/shared/ErrorMessage';
import BackButton from '../../components/shared/BackButton';

export default function Curriculum() {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadAllData();
  }, []);

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
    } catch (err) {
      setError(err.message || 'Erro ao carregar dados');
      console.error('Error loading data:', err);
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

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
        <ErrorMessage message={error} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Header personalInfo={personalInfo} />

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <BackButton />
      </div>

      {/* Experiences Section */}
      <Section
        id="experiences"
        title="Experiências Profissionais"
        subtitle="Minha trajetória no mercado de trabalho"
        icon={Briefcase}
        className="bg-white"
      >
        <div className="space-y-8">
          {experiences.length > 0 ? (
            experiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))
          ) : (
            <Card className="p-8 text-center">
              <p className="text-gray-600">Nenhuma experiência cadastrada ainda.</p>
            </Card>
          )}
        </div>
      </Section>

      {/* Skills Section */}
      <Section
        id="skills"
        title="Habilidades Técnicas"
        subtitle="Tecnologias e competências que domino"
        icon={Code}
      >
        {skills.length > 0 ? (
          <SkillsGrid skills={skills} />
        ) : (
          <Card className="p-8 text-center">
            <p className="text-gray-600">Nenhuma habilidade cadastrada ainda.</p>
          </Card>
        )}
      </Section>

      {/* Projects Section */}
      <Section
        id="projects"
        title="Projetos em Destaque"
        subtitle="Alguns dos meus trabalhos mais relevantes"
        icon={FileText}
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <Card className="col-span-full p-8 text-center">
              <p className="text-gray-600">Nenhum projeto cadastrado ainda.</p>
            </Card>
          )}
        </div>
      </Section>

      {/* Education Section */}
      <Section
        id="education"
        title="Formação Acadêmica"
        subtitle="Minha jornada educacional"
        icon={GraduationCap}
      >
        <div className="space-y-6">
          {education.length > 0 ? (
            education.map((edu) => (
              <Card key={edu.id} className="p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.title}</h3>
                <p className="text-indigo-600 font-medium mb-3">{edu.institution}</p>
                <p className="text-gray-700 leading-relaxed">{edu.description}</p>
              </Card>
            ))
          ) : (
            <Card className="p-8 text-center">
              <p className="text-gray-600">Nenhuma formação cadastrada ainda.</p>
            </Card>
          )}
        </div>
      </Section>
    </div>
  );
}
