import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
  spring,
} from 'remotion';
import { StickFigure } from '../character/StickFigure';

export const TalkingScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Studsande entré
  const entranceScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Huvudets nickande
  const headRotation = interpolate(
    frame % (2 * fps),
    [0, fps, 2 * fps],
    [0, -8, 0],
    { easing: Easing.inOut(Easing.sin), extrapolateRight: 'clamp' }
  );

  // Vänster arm gestikulerar
  const leftArmRotation = interpolate(
    frame % (1.5 * fps),
    [0, 0.75 * fps, 1.5 * fps],
    [0, -30, 0],
    { easing: Easing.inOut(Easing.quad), extrapolateRight: 'clamp' }
  );

  // Höger arm gestikulerar
  const rightArmRotation = interpolate(
    frame % (1.5 * fps),
    [0, 0.75 * fps, 1.5 * fps],
    [0, 30, 0],
    { easing: Easing.inOut(Easing.quad), extrapolateRight: 'clamp' }
  );

  // Vertikal bobbing
  const bobbing = interpolate(
    frame % fps,
    [0, 0.5 * fps, fps],
    [0, -6, 0],
    { easing: Easing.inOut(Easing.sin), extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#f5f5f0',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Bakgrundscirkel */}
      <div
        style={{
          position: 'absolute',
          width: 600,
          height: 600,
          borderRadius: '50%',
          backgroundColor: '#e8e8e0',
        }}
      />

      {/* Streckgubben */}
      <div
        style={{
          transform: `scale(${entranceScale}) translateY(${bobbing}px)`,
        }}
      >
        <StickFigure
          headRotation={headRotation}
          leftArmRotation={leftArmRotation}
          rightArmRotation={rightArmRotation}
        />
      </div>
    </AbsoluteFill>
  );
};
