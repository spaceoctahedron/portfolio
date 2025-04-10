import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

// Register TextGeometry as a React component
extend({ TextGeometry });

// Custom 3D Text component
const ParagraphSymbol = () => {
  const groupRef = useRef();
  const [font, setFont] = useState(null);
  
  useEffect(() => {
    // Load font using FontLoader
    const loader = new FontLoader();
    loader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', loadedFont => {
      setFont(loadedFont);
    });
    
    // Clean up
    return () => {
      if (groupRef.current) {
        while (groupRef.current.children.length) {
          const object = groupRef.current.children[0];
          if (object.geometry) object.geometry.dispose();
          // Fixed material disposal logic
          if (object.material) {
            // Check if material is an array
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
          groupRef.current.remove(object);
        }
      }
    };
  }, []);
  
  useEffect(() => {
    if (font && groupRef.current) {
      // Remove any existing children
      while (groupRef.current.children.length) {
        const object = groupRef.current.children[0];
        if (object.geometry) object.geometry.dispose();
        // Fixed material disposal logic
        if (object.material) {
          // Check if material is an array
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
        groupRef.current.remove(object);
      }
      
      // Create text geometry with reduced extrusion
      const geometry = new TextGeometry('§', {
        font: font,
        size: 7,
        height: 0.8, 
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 0.27,
        bevelSize: 0.2,
        bevelOffset: 0,
        bevelSegments: 18
      });
      
      // Center the geometry
      geometry.computeBoundingBox();
      const centerOffset = new THREE.Vector3();
      centerOffset.x = -(geometry.boundingBox.max.x - geometry.boundingBox.min.x) / 2;
      centerOffset.y = -(geometry.boundingBox.max.y - geometry.boundingBox.min.y) / 2;
      centerOffset.z = -(geometry.boundingBox.max.z - geometry.boundingBox.min.z) / 2;
      
      // Create materials
      const materials = [
        new THREE.MeshPhongMaterial({
          color: 0x8b76e9,
          specular: 0xffffff,
          shininess: 100,
          emissive: 0xea2081,
          emissiveIntensity: 0.8,
        }),
        new THREE.MeshPhongMaterial({
          color: 0x6a59b0, // Slightly darker for sides
          specular: 0xffffff,
          shininess: 80,
          emissive: 0xc91b6e, // Darker emissive for sides
          emissiveIntensity: 0.3,
        })
      ];
      
      // Create mesh with geometry and material
      const textMesh = new THREE.Mesh(geometry, materials);
      textMesh.position.copy(centerOffset);
      
      // Add to group
      groupRef.current.add(textMesh);
    }
  }, [font]);
  
  // Rotate the symbol
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });
  
  return <group ref={groupRef} />;
};

const LegalNoticeCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 18], fov: 45 }}
      style={{ background: 'transparent' }}
    >
      {/* Removed the color background */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight 
        position={[5, 15, 10]} 
        angle={0.3} 
        penumbra={0.2}
        intensity={2} 
        castShadow
      />
      <spotLight 
        position={[-15, -10, -5]} 
        angle={0.3} 
        penumbra={0.2}
        intensity={1.8} 
        color="#4a6aff"
      />
      <ParagraphSymbol />
      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  );
};

export default LegalNoticeCanvas;