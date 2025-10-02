import { Link } from 'react-router-dom';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900">
            Eduardo Costa Wiezel
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600">
            Coordenador de TI | Desenvolvedor Fullstack | Entusiasta de IAs
          </p>
          
          <div className="flex justify-center gap-4 pt-6">
            <a
              href="https://github.com/EduardoWiezel0801"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/eduardo-costa-wiezel-aa39151bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:eduardocostawiezel@gmail.com"
              className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="pt-8">
            <Link
              to="/curriculum"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition text-lg font-semibold"
            >
              <FileText size={24} />
              Ver Currículo Completo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}