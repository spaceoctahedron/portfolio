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

// Major cities
const majorCities = [

  { name: "Berlin", lat: 52.52, lon: 13.405 },

];

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

      {/* Major city dots */}
      {cityPositions.map(({ name, pos }, i) => (
        <mesh key={name} position={pos}>
          <sphereGeometry args={[0.015, 8, 8]} />
          <meshStandardMaterial color="#ea2081" />
        </mesh>
      ))}
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
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 3, 5]} intensity={1} />
      <OrbitControls enableZoom={false} />
      <Earth />
    </Canvas>
  );
};

export default EarthCanvas;
