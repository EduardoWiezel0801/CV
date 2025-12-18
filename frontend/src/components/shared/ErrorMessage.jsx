import { AlertCircle } from 'lucide-react';

export default function ErrorMessage({ message }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
      <AlertCircle size={24} />
      <p className="font-medium">{message || 'Ocorreu um erro ao carregar os dados.'}</p>
    </div>
  );
}