import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(8000), { radius: 1.2 }));

  useFrame((state, delta) => {
    if (!ref.current?.geometry) return;
    
    const positions = ref.current.geometry.attributes.position.array;
    const speed = 0.05; // Slower, smoother speed
    
    // Smooth continuous movement toward viewer
    for (let i = 0; i < positions.length; i += 3) {
      // Only modify Z-axis for straight movement
      positions[i + 2] += delta * speed;
      
      // Seamless recycling when stars pass behind
      if (positions[i + 2] > 1.2) {
        positions[i + 2] = -1.2;
      }
    }
    
    // Efficient single update
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
      <PointMaterial
        transparent
        color='#ffffff'
        size={0.002}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        frameloop="always" // Ensures smooth animation
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;