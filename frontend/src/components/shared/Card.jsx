export default function Card({ children, className = '', hover = false }) {
  return (
    <div className={`
      bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 w-full
      ${hover ? 'transition-all duration-300 hover:shadow-2xl hover:-translate-y-2' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
}
