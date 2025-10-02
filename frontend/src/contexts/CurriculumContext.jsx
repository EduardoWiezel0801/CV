import { createContext, useContext, useState, useEffect } from 'react';
import { experienceService } from '@/services/experienceService';
import { skillService } from '@/services/skillService';
import { projectService } from '@/services/projectService';

const CurriculumContext = createContext();

export function CurriculumProvider({ children }) {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState({});
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const [experiencesData, skillsData, projectsData] = await Promise.all([
        experienceService.getAll(),
        skillService.getByCategory(),
        projectService.getAll(),
      ]);

      setExperiences(experiencesData);
      setSkills(skillsData);
      setProjects(projectsData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CurriculumContext.Provider
      value={{
        experiences,
        skills,
        projects,
        loading,
        error,
        refetch: fetchAllData,
      }}
    >
      {children}
    </CurriculumContext.Provider>
  );
}

export function useCurriculum() {
  const context = useContext(CurriculumContext);
  if (!context) {
    throw new Error('useCurriculum must be used within CurriculumProvider');
  }
  return context;
}