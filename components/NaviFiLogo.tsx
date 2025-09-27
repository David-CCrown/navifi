"use client";

export default function NaviFiLogo() {
  return (
    <svg
      viewBox="0 0 200 200"
      width="200"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <defs>
        <linearGradient id="navifiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1cc7e7" />
          <stop offset="100%" stopColor="#0070f3" />
        </linearGradient>

        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* small arrow symbol */}
        <symbol id="arrowSymbol" viewBox="-10 -10 20 20" overflow="visible">
          <g transform="rotate(-35)">
            <path
              d="M-8 3 L8 0 L-8 -3 L-2 0 Z"
              fill="url(#navifiGrad)"
            />
            <rect
              x="-8"
              y="-1"
              width="10"
              height="2"
              rx="1"
              fill="url(#navifiGrad)"
            />
          </g>
        </symbol>
      </defs>

      {/* background ring */}
      <g transform="translate(100,100)">
        <circle
          cx="0"
          cy="0"
          r="78"
          fill="none"
          stroke="url(#navifiGrad)"
          strokeWidth="6"
          opacity="0.95"
        />
        <path
          d="M -55 -55 A 78 78 0 0 1 55 -55"
          fill="none"
          stroke="#0ff2ff"
          strokeWidth="4"
          strokeOpacity="0.18"
        />
        <circle cx="0" cy="0" r="58" fill="rgba(255,255,255,0.02)" />
      </g>

      {/* mountain shape */}
      <g transform="translate(100,100)" filter="url(#glow)">
        <path
          d="M -62 38 L -8 -8 L 62 38 Z"
          fill="url(#navifiGrad)"
          opacity="0.95"
        />
        <path
          d="M -62 38 L -8 -8 L 62 38"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
      </g>

      {/* motion path */}
      <path
        id="motionPath"
        d="M -60 50 L 60 -40"
        fill="none"
        stroke="transparent"
      />

      {/* arrow that animates */}
      <g id="navigator" transform="translate(0,0)">
        <use xlinkHref="#arrowSymbol" x="-10" y="-10" width="20" height="20" />
        <animateMotion
          xlinkHref="#navigator"
          dur="6s"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#motionPath" />
        </animateMotion>
      </g>

      {/* CSS fallback animation */}
      <style>{`
        @keyframes navPulse {
          0% { transform: translate(0px,0px) rotate(0deg); opacity: 1; }
          50% { transform: translate(0px,-2px) rotate(6deg); opacity: 0.95; }
          100% { transform: translate(0px,0px) rotate(0deg); opacity: 1; }
        }
        #navigator { transform-origin: 100px 100px; animation: navPulse 3.5s ease-in-out infinite; }
        svg:hover g use { filter: drop-shadow(0 6px 14px rgba(0,112,243,0.20)); }
      `}</style>
    </svg>
  );
}
