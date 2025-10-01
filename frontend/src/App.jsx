import Header from './components/curriculum/Header/Header';
import Summary from './components/curriculum/Summary/Summary';
import Experience from './components/curriculum/Experience/Experience';
import Skills from './components/curriculum/Skills/Skills';
import Projects from './components/curriculum/Projects/Projects';
import Education from './components/curriculum/Education/Education';
import Personal from './components/curriculum/Personal/Personal';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="curriculum-container">
        <Header />
        
        <main className="main-content">
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

export default App;
