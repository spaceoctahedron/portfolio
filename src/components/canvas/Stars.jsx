import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

const vertexShader = /* glsl */ `
attribute float aPhase;
uniform float uTime;
varying float vOpacity;

void main() {
  float rawShimmer = 0.5 + 0.5 * sin(uTime * 2.0 + aPhase * 10.0);
  vOpacity = mix(0.3, 1.0, rawShimmer); 

  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = 2.5; // increased from 1.5
  gl_Position = projectionMatrix * mvPosition;
}
`;

const fragmentShader = /* glsl */ `
  varying float vOpacity;

  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;

    gl_FragColor = vec4(vec3(1.0), vOpacity);
  }
`;

const Stars = () => {
  const pointsRef = useRef();
  const numPoints = 8000;

  const { positions, phases } = useMemo(() => {
    const pos = random.inSphere(new Float32Array(numPoints), { radius: 1.2 });
    const phase = new Float32Array(numPoints / 3);
    for (let i = 0; i < phase.length; i++) {
      phase[i] = Math.random();
    }
    return { positions: pos, phases: phase };
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));
    return geo;
  }, [positions, phases]);

  const material = useRef();
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    []
  );

  useFrame((state) => {
    if (material.current) {
      material.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry} frustumCulled={false}>
      <shaderMaterial
        ref={material}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        uniforms={uniforms}
      />
    </points>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }} frameloop="always">
        <Stars />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
