import { useCurriculum } from '@/contexts/CurriculumContext';
import Header from './sections/Header';
import Summary from './sections/Summary';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Personal from './sections/Personal';
import LoadingSpinner from '../../components/shared/LoadingSpinner.jsx';
import ErrorMessage from '../../components/shared/ErrorMessage.jsx';

export default function Curriculum() {
  const { loading, error } = useCurriculum();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <ErrorMessage message={error} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <Header />
        
        <main className="p-6 md:p-10 space-y-12">
          <Summary />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Personal />
        </main>
      </div>
    </div>
  );
}