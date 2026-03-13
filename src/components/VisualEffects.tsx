interface VisualEffectsProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const VisualEffects = ({ variant = 'primary' }: VisualEffectsProps) => {
  const getOrbColors = () => {
    switch (variant) {
      case 'primary':
        return {
          orb1: 'from-conecta-500/25 to-purple-500/25',
          orb2: 'from-blue-500/25 to-conecta-500/25',
          orb3: 'from-indigo-500/20 to-conecta-400/20'
        };
      case 'secondary':
        return {
          orb1: 'from-purple-500/20 to-conecta-400/20',
          orb2: 'from-conecta-500/20 to-indigo-500/20',
          orb3: 'from-blue-500/15 to-purple-500/15'
        };
      case 'tertiary':
        return {
          orb1: 'from-indigo-500/15 to-blue-500/15',
          orb2: 'from-conecta-400/15 to-purple-500/15',
          orb3: 'from-purple-500/10 to-conecta-500/10'
        };
    }
  };



  const colors = getOrbColors();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-conecta-400/40 rounded-full floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Gradient Orbs */}
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r ${colors.orb1} rounded-full blur-3xl gradient-orb`} />
      <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r ${colors.orb2} rounded-full blur-3xl gradient-orb`} />
      <div className={`absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r ${colors.orb3} rounded-full blur-2xl gradient-orb`} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(96, 165, 250, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 165, 250, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Animated Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`lineGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(37, 99, 235)" stopOpacity="0.1" />
              <stop offset="50%" stopColor="rgb(37, 99, 235)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(37, 99, 235)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q250,50 500,100 T1000,100"
            stroke={`url(#lineGradient-${variant})`}
            strokeWidth="2"
            fill="none"
            className="neural-network-line"
          />
          <path
            d="M0,200 Q300,150 600,200 T1200,200"
            stroke={`url(#lineGradient-${variant})`}
            strokeWidth="1"
            fill="none"
            className="neural-network-line"
          />
          <path
            d="M0,300 Q400,250 800,300 T1600,300"
            stroke={`url(#lineGradient-${variant})`}
            strokeWidth="1.5"
            fill="none"
            className="neural-network-line"
            style={{ animationDelay: '2s' }}
          />
        </svg>
      </div>
    </div>
  );
};

export default VisualEffects;
