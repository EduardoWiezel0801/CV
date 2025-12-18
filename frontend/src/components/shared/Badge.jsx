export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-gray-100 text-gray-800 border border-gray-200',
    primary: 'bg-blue-100 text-blue-800 border border-blue-200',
    success: 'bg-green-100 text-green-800 border border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
    danger: 'bg-red-100 text-red-800 border border-red-200',
    purple: 'bg-purple-100 text-purple-800 border border-purple-200',
    gradient: 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 shadow-md',
  };

  return (
    <span className={`
      inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium
      ${variants[variant]}
      ${className}
    `}>
      {children}
    </span>
  );
}
