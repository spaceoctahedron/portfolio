import React, { useEffect, useState, useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";
import * as d3 from "d3-geo";

// Lighten a hex color by a percentage
const lightenColor = (hex, percent) => {
  const num = parseInt(hex.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return (
    "#" +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
};

// Converts lat/lon to 3D vector
const latLongToVector3 = (lat, lon, radius = 1) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

// Calculate text offset based on latitude
const getTextOffset = (lat) => {
  // For near-equator locations (between -30 and 30 degrees), push text up more
  if (Math.abs(lat) < 30) return 0.15;
  // For mid-latitudes, moderate offset
  if (Math.abs(lat) < 60) return 0.1;
  // For polar regions, small offset
  return 0.05;
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

// Office locations
const majorCities = [
  { name: "Berlin", lat: 52.52, lon: 13.405, color: "#ea2081" },
  { name: "Lomé", lat: 6.1319, lon: 1.2220, color: "#8b76e9" },
];

// Pulsating Diamond component for office locations
const PulsatingDiamond = ({ position, color = "#ea2081", name, setActiveCity, lat }) => {
  const meshRef = useRef();
  const baseScale = 3;
  const [hovered, setHovered] = useState(false);
  const textOffset = getTextOffset(lat);

  const displayColor = hovered ? lightenColor(color, 10) : color;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const animationProgress = (t % 4) / 4;

    const animScale = animationProgress <= 0.5 
      ? 1 - (0.3 * (animationProgress * 2)) 
      : 0.7 + (0.3 * ((animationProgress - 0.5) * 2));

    const finalScale = animScale * baseScale;
    const rotation = animationProgress * Math.PI * 2;

    if (meshRef.current) {
      meshRef.current.scale.set(finalScale, finalScale, finalScale);
      meshRef.current.rotation.y = rotation;
    }
  });

  return (
    <group>
      <mesh 
        ref={meshRef} 
        position={position} 
        rotation={[Math.PI/4, 0, Math.PI/4]}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          setActiveCity(name);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
          setActiveCity(null);
        }}
        onClick={(e) => {
          e.stopPropagation();
          setActiveCity(name === activeCity ? null : name);
        }}
      >
        <boxGeometry args={[0.02, 0.02, 0.02]} />
        <meshStandardMaterial 
          color={displayColor} 
          emissive={displayColor} 
          emissiveIntensity={0.4} 
        />
      </mesh>

      {hovered && (
        <Text
          position={position.clone().normalize().multiplyScalar(1.1)}
          fontSize={0.05}
          color={color} // original color
          anchorX="center"
          anchorY="bottom"
          outlineWidth={0.002}
          outlineColor="#000000"
          outlineOpacity={0.8}
        >
          {name}
        </Text>
      )}
    </group>
  );
};


const Earth = () => {
  const [dots, setDots] = useState([]);
  const [activeCity, setActiveCity] = useState(null);
  const earthRef = useRef();
  const earthTexture = useLoader(
    THREE.TextureLoader,
    "https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg"
  );

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

  const cityPositions = useMemo(() => {
    return majorCities.map((city) => {
      const pos = latLongToVector3(city.lat, city.lon, 1.01);
      return { ...city, pos };
    });
  }, []);

  return (
    <group ref={earthRef} scale={0.8}>
      {/* Earth solid sphere with dark fill */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={earthTexture} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#0a0a0a" transparent opacity={0.8}/> {/* Dark fill */}
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

      {/* Office locations */}
      {cityPositions.map(({ name, pos, color, lat }) => (
        <PulsatingDiamond 
          key={name} 
          position={pos} 
          color={color} 
          name={name}
          setActiveCity={setActiveCity}
          lat={lat}
        />
      ))}

      {/* Persistent city name when clicked */}
      {activeCity && (
        cityPositions.filter(city => city.name === activeCity).map(city => {
          return (
            <Text
              key={city.name}
              position={city.pos.clone().normalize().multiplyScalar(1.1)} // Push label away from sphere and marker
              fontSize={0.05}
              color="white"
              anchorX="center"
              anchorY="bottom"
              outlineWidth={0.005}
              outlineColor="#000000"
              outlineOpacity={0.8}
            >
              {city.name}
            </Text>
          );
        })
      )}
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