import React from 'react';

export type StickFigureProps = {
  headRotation?: number;
  leftArmRotation?: number;
  rightArmRotation?: number;
  leftLegRotation?: number;
  rightLegRotation?: number;
  bodyRotation?: number;
  color?: string;
};

export const StickFigure: React.FC<StickFigureProps> = ({
  headRotation = 0,
  leftArmRotation = 0,
  rightArmRotation = 0,
  leftLegRotation = 0,
  rightLegRotation = 0,
  bodyRotation = 0,
  color = '#1a1a1a',
}) => {
  const stroke = color;
  const sw = 8;
  const cap = 'round';

  return (
    <svg
      width={400}
      height={600}
      viewBox="0 0 400 600"
      style={{ overflow: 'visible' }}
    >
      <g transform={`rotate(${bodyRotation} 200 260)`}>
        {/* Kropp */}
        <line x1="200" y1="210" x2="200" y2="380" stroke={stroke} strokeWidth={sw} strokeLinecap={cap} />

        {/* Huvud */}
        <g transform={`rotate(${headRotation} 200 140)`}>
          <circle cx="200" cy="140" r="45" fill="none" stroke={stroke} strokeWidth={sw} />
          <circle cx="185" cy="132" r="4" fill={stroke} />
          <circle cx="215" cy="132" r="4" fill={stroke} />
          <path
            d="M 185 158 Q 200 168 215 158"
            fill="none"
            stroke={stroke}
            strokeWidth={4}
            strokeLinecap={cap}
          />
        </g>

        {/* Hals */}
        <line x1="200" y1="185" x2="200" y2="210" stroke={stroke} strokeWidth={sw} strokeLinecap={cap} />

        {/* Vänster arm */}
        <g transform={`rotate(${leftArmRotation} 200 230)`}>
          <line x1="200" y1="230" x2="130" y2="310" stroke={stroke} strokeWidth={sw} strokeLinecap={cap} />
          <circle cx="130" cy="310" r="10" fill={stroke} />
        </g>

        {/* Höger arm */}
        <g transform={`rotate(${rightArmRotation} 200 230)`}>
          <line x1="200" y1="230" x2="270" y2="310" stroke={stroke} strokeWidth={sw} strokeLinecap={cap} />
          <circle cx="270" cy="310" r="10" fill={stroke} />
        </g>

        {/* Vänster ben */}
        <g transform={`rotate(${leftLegRotation} 200 380)`}>
          <line x1="200" y1="380" x2="160" y2="500" stroke={stroke} strokeWidth={sw} strokeLinecap={cap} />
          <line x1="160" y1="500" x2="140" y2="500" stroke={stroke} strokeWidth={sw} strokeLinecap={cap} />
        </g>

        {/* Höger ben */}
        <g transform={`rotate(${rightLegRotation} 200 380)`}>
          <line x1="200" y1="380" x2="240" y2="500" stroke={stroke} strokeWidth={sw} strokeLinecap={cap} />
          <line x1="240" y1="500" x2="260" y2="500" stroke={stroke} strokeWidth={sw} strokeLinecap={cap} />
        </g>
      </g>
    </svg>
  );
};
