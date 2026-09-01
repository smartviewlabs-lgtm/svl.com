import React from 'react';

interface SVLLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const SVLLogo: React.FC<SVLLogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = true 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Hexagonal Multi-Color SVL Logo */}
      <div className={`relative ${sizeClasses[size]} shrink-0 flex items-center justify-center`}>
        <svg 
          viewBox="0 0 200 200" 
          className="w-full h-full drop-shadow-sm" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients for the interlocking hexagon ribbons */}
            <linearGradient id="svl-grad-top" x1="20" y1="30" x2="180" y2="30" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ff7a00" />
              <stop offset="50%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#9c27b0" />
            </linearGradient>
            <linearGradient id="svl-grad-right" x1="180" y1="30" x2="180" y2="170" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#9c27b0" />
              <stop offset="50%" stopColor="#673ab7" />
              <stop offset="100%" stopColor="#3f51b5" />
            </linearGradient>
            <linearGradient id="svl-grad-bottom" x1="180" y1="170" x2="20" y2="170" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3f51b5" />
              <stop offset="50%" stopColor="#00bcd4" />
              <stop offset="100%" stopColor="#009688" />
            </linearGradient>
            <linearGradient id="svl-grad-left" x1="20" y1="170" x2="20" y2="30" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4caf50" />
              <stop offset="50%" stopColor="#ffc107" />
              <stop offset="100%" stopColor="#ff7a00" />
            </linearGradient>
          </defs>

          {/* Hexagon Ribbon Outer Path */}
          <path
            d="M100 8 L178 52 L178 148 L100 192 L22 148 L22 52 Z"
            fill="none"
            stroke="url(#svl-grad-top)"
            strokeWidth="24"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Additional segments to reproduce the exact folded ribbon look */}
          <path
            d="M100 8 L178 52 L178 148"
            fill="none"
            stroke="url(#svl-grad-right)"
            strokeWidth="24"
            strokeLinejoin="round"
          />
          <path
            d="M178 148 L100 192 L22 148"
            fill="none"
            stroke="url(#svl-grad-bottom)"
            strokeWidth="24"
            strokeLinejoin="round"
          />
          <path
            d="M22 148 L22 52 L100 8"
            fill="none"
            stroke="url(#svl-grad-left)"
            strokeWidth="24"
            strokeLinejoin="round"
          />

          {/* White inner backing */}
          <polygon
            points="100,28 160,62 160,138 100,172 40,138 40,62"
            fill="#ffffff"
          />

          {/* SVL Bold Navy Brand Text */}
          <text
            x="100"
            y="118"
            textAnchor="middle"
            fill="#1e293b"
            fontSize="54"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="-1.5"
          >
            SVL
          </text>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="text-base sm:text-xl font-black tracking-tight text-slate-900 font-heading">
              Smart View <span className="text-indigo-600">Labs</span>
            </span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-semibold text-slate-500 tracking-tight mt-0.5 leading-tight">
            Next-Gen Digital Solutions & Innovation
          </span>
        </div>
      )}
    </div>
  );
};
