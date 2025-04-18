import React, { useEffect, useState, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import * as d3 from "d3-geo";

// Converts lat/lon to 3D vector
const latLongToVector3 = (lat, lon, radius = 1) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

// Sample points from GeoJSON
const samplePoints = (geojson, density = 0.3) => {
  const land = geojson.features;
  const points = [];

  land.forEach((feature) => {
    const mesh = feature.geometry;
    if (mesh.type === "Polygon" || mesh.type === "MultiPolygon") {
      const coordinates = mesh.type === "Polygon" ? [mesh.coordinates] : mesh.coordinates;
      coordinates.forEach((poly) => {
        poly.forEach((ring) => {
          for (let i = 0; i < ring.length; i++) {
            const [lon, lat] = ring[i];
            points.push({ lat, lon });
          }
        });
      });
    }
  });

  return points.filter((_, i) => i % Math.floor(1 / density) === 0);
};

// Corporate headquarters
const majorCities = [
  { name: "Berlin", lat: 52.52, lon: 13.405 },
];

// Pulsating Diamond component for Berlin 
const PulsatingDiamond = ({ position }) => {
  const meshRef = useRef();
  // Base scale is 3x larger
  const baseScale = 3;
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // Animation cycle of 4 seconds
    const animationProgress = (t % 4) / 4;
    
    // Calculate scale for pulsing effect
    const animScale = animationProgress <= 0.5 
      ? 1 - (0.3 * (animationProgress * 2)) 
      : 0.7 + (0.3 * ((animationProgress - 0.5) * 2));
    
    const finalScale = animScale * baseScale;
    
    // Calculate horizontal rotation (left to right)
    // We're rotating around the y-axis now
    const rotation = animationProgress * Math.PI * 2; // Full 360° rotation
    
    if (meshRef.current) {
      meshRef.current.scale.set(finalScale, finalScale, finalScale);
      // Apply y-axis rotation for horizontal spinning
      meshRef.current.rotation.y = rotation;
    }
  });

  // Position diamond standing on corner by default
  // We use an initial rotation to make it stand on one corner
  return (
    <mesh 
      ref={meshRef} 
      position={position} 
      // Initial rotation to make diamond stand on one corner relative to Earth
      rotation={[Math.PI/4, 0, Math.PI/4]}
    >
      <boxGeometry args={[0.02, 0.02, 0.02]} />
      <meshStandardMaterial color="#ea2081" />
    </mesh>
  );
};

const Earth = () => {
  const [dots, setDots] = useState([]);
  const earthRef = useRef();

  useFrame(() => {
    if (earthRef.current) earthRef.current.rotation.y += 0.0015;
  });

  useEffect(() => {
    const fetchGeo = async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
      );
      const data = await res.json();
      const sampled = samplePoints(data, 0.1); // smaller = more dots
      setDots(sampled);

      // Rotate Earth so Berlin (13.405°E) is centered at the front
      if (earthRef.current) {
        const berlinLongitude = 13.405;
        const rotationRadians = THREE.MathUtils.degToRad(berlinLongitude - 90);
        earthRef.current.rotation.y = rotationRadians;
      }
    };

    fetchGeo();
  }, []);

  // Memoize city positions
  const cityPositions = useMemo(() => {
    return majorCities.map((city) => ({
      ...city,
      pos: latLongToVector3(city.lat, city.lon, 1.01),
    }));
  }, []);

  return (
    <group ref={earthRef} scale={0.8}>
      {/* Earth solid sphere with dark fill */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#0a0a0a" /> {/* Dark fill */}
      </mesh>

      {/* Atmospheric Glow */}
      <mesh>
        <sphereGeometry args={[1.08, 64, 64]} />
        <meshPhongMaterial
          color="#52bcff"
          transparent
          opacity={0.08} // very soft
          shininess={0.0}
          emissive="#52bcff"
          emissiveIntensity={0.5}
          side={THREE.BackSide}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[1.08, 64, 64]} />
        <shaderMaterial
          transparent
          side={THREE.BackSide}
          vertexShader={`
            varying vec3 vNormal;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            varying vec3 vNormal;
            void main() {
              float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 4.0);
              gl_FragColor = vec4(0.32, 0.74, 1.0, intensity * 0.35); // #52bcff with fade
            }
          `}
        />
      </mesh>

      {/* Dots on coastlines */}
      {dots.map(({ lat, lon }, i) => {
        const pos = latLongToVector3(lat, lon, 1.01);
        return (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.01, 6, 6]} />
            <meshStandardMaterial color="#52bcff" />
          </mesh>
        );
      })}

      {/* Major city dots - with special diamond for Berlin */}
      {cityPositions.map(({ name, pos }) => {
        if (name === "Berlin") {
          return <PulsatingDiamond key={name} position={pos} />;
        }
        return (
          <mesh key={name} position={pos}>
            <sphereGeometry args={[0.015, 8, 8]} />
            <meshStandardMaterial color="#ea2081" />
          </mesh>
        );
      })}
    </group>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 100,
        position: [2, 2, 3],
      }}
      gl={{ antialias: true }}
    >

      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 3, 5]} intensity={1} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}  // Lock vertical rotation
        maxPolarAngle={Math.PI / 2}
      />
      <Earth />
    </Canvas>
  );
};

export default EarthCanvas;