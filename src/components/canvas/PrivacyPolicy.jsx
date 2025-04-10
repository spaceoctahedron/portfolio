import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Custom 3D Lock component
const Lock3D = () => {
  const groupRef = useRef();
  
  // Rotate the lock
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });
  
  return (
    <group ref={groupRef}>
      {/* Lock body */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[4, 3, 1.5]} />
        <meshPhongMaterial 
          color="#8b76e9"
          specular="#ffffff"
          shininess={100}
          emissive="#52bcff"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Lock shackle (the U-shaped part) */}
      <mesh position={[0, 1.5, 0]}>
        <torusGeometry args={[1.5, 0.5, 16, 32, Math.PI]} />
        <meshPhongMaterial 
          color="#6a59b0"
          specular="#ffffff"
          shininess={80}
          emissive="#3a8cbe"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Keyhole */}
      <mesh position={[0, -0.5, 0.8]}>
        <cylinderGeometry args={[0.5, 0.5, 0.5, 32]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      
      {/* Keyhole slot */}
      <mesh position={[0, -0.5, 0.8]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[0.2, 1, 0.2]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
    </group>
  );
};

const PrivacyPolicyCanvas = () => {
  return (
    <Canvas
      camera={{ 
        position: [0, 0, 10],
        fov: 45,
        near: 0.1,
        far: 100 
      }}
      style={{ background: 'transparent' }}
    >
      {/* Lighting setup */}
      <ambientLight intensity={0.7} color="#8b76e9" />
      <pointLight position={[15, 15, 15]} intensity={1.5} color="#ea2081" />
      <pointLight position={[-15, -15, 5]} intensity={0.8} color="#8b76e9" />
      <spotLight
        position={[0, 20, 10]}
        angle={0.4}
        intensity={3}
        penumbra={1}
        castShadow
      />
      
      <Lock3D />
      <OrbitControls
        autoRotate
        autoRotateSpeed={1.2}
        enableZoom={false}
        minPolarAngle={Math.PI / 6}  // Limit vertical rotation
        maxPolarAngle={Math.PI / 1.5}
      />
    </Canvas>
  );
};

export default PrivacyPolicyCanvas;