import { ArrowLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BackButton({ to = '/', label = 'Voltar para Home' }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-2 hover:scale-105 font-medium"
    >
      <div className="flex items-center gap-2">
        <ArrowLeft className="w-5 h-5" />
        <Home className="w-5 h-5" />
      </div>
      <span>{label}</span>
    </Link>
  );
}
