import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedWaveLines = () => {
  const numLines = 30;
  const numPoints = 200;
  const baseAmplitude = 0.15;      // subtle wave motion
  const baseFrequency = 2.0;
  const baseSpeed = 0.3;

  const pulseMaxAmplitude = 2.5;   // strong vertical wave
  const pulseFrequency = 0.5;
  const pulseSpeed = 0.05;

  const verticalOffset = -1.2;
  const lineSpacing = 0.15;

  const xStart = -10;
  const xEnd = 10;

  const linesRef = useRef([]);

  const pointsArray = useMemo(() => {
    const lines = [];
    for (let i = 0; i < numLines; i++) {
      const z = (i - numLines / 2) * lineSpacing;
      const points = [];
      for (let j = 0; j < numPoints; j++) {
        const x = xStart + (j / (numPoints - 1)) * (xEnd - xStart);
        const y = 0;
        points.push(new THREE.Vector3(x, y, z));
      }
      lines.push(points);
    }
    return lines;
  }, [numLines, numPoints]);

  const lines = useMemo(() => {
    return pointsArray.map((points) => {
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ color: '#8b76e9' });
      return { geometry, material };
    });
  }, [pointsArray]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    // Global pulse amplitude based on time
    const pulseEnvelope = Math.sin(time * 0.3) * 0.5 + 0.5; // oscillates 0 to 1
    const currentPulseAmplitude = pulseEnvelope * pulseMaxAmplitude;

    linesRef.current.forEach((line, i) => {
      const newPoints = [];

      for (let j = 0; j < numPoints; j++) {
        const x = xStart + (j / (numPoints - 1)) * (xEnd - xStart);

        // Subtle baseline wave
        const baseWave = Math.sin(baseFrequency * x - baseSpeed * time) * baseAmplitude;

        // Big pulse wave (only vertical shape, same for all lines)
        const pulseWave = Math.sin(pulseFrequency * x - pulseSpeed * time) * currentPulseAmplitude;

        const pulseYOffset = currentPulseAmplitude * 0.6;
        const y = baseWave + pulseWave + pulseYOffset + verticalOffset;
        const z = (i - numLines / 2) * lineSpacing;

        newPoints.push(new THREE.Vector3(x, y, z));
      }

      line.geometry.setFromPoints(newPoints);
    });
  });

  return (
    <>
      {lines.map((lineData, i) => (
        <line
          key={i}
          ref={(ref) => (linesRef.current[i] = ref)}
          geometry={lineData.geometry}
          material={lineData.material}
        />
      ))}
    </>
  );
};

const AnimatedLinesCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <AnimatedWaveLines />
      </Canvas>
    </div>
  );
};

export default AnimatedLinesCanvas;
