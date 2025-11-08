import { useState } from 'react';

function Logo({ variant = 'default', className = "w-8 h-8" }) {
  const [imageError, setImageError] = useState(false);

  // Logo variants mapping
  const logoVariants = {
    default: '/logo-main.svg',
    black: '/asg-black.svg',
    white: '/asg-white.svg'
  };

  const logoSrc = logoVariants[variant] || logoVariants.default;

  // Fallback to text if image fails
  if (imageError) {
    return (
      <div className={`flex items-center ${className}`}>
        <span className="text-xl font-bold text-indigo-400">AI</span>
        <span className="text-xl font-bold text-white">Signals</span>
      </div>
    );
  }

  return (
    <img
      src={logoSrc}
      alt="AI Signals VIP Logo"
      className={className}
      onError={() => setImageError(true)}
    />
  );
}

export default Logo;