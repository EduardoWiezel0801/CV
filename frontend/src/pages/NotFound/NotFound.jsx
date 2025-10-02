import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-slate-900">404</h1>
        <h2 className="text-3xl font-semibold text-slate-700">
          Página não encontrada
        </h2>
        <p className="text-slate-600">
          A página que você está procurando não existe.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition"
        >
          <Home size={20} />
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}