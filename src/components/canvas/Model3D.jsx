import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Model3D = ({ isMobile }) => {
  const model = useGLTF("./octa-01/scene.gltf");
  const SCALE_FACTOR =400;

  return (
    <mesh>
      <hemisphereLight intensity={0.15 * 2} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1 * SCALE_FACTOR * 10 }
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1 * SCALE_FACTOR * 0.01} />
      <primitive
        object={model.scene}
        scale={isMobile ? 0.7 * SCALE_FACTOR : 0.75 * SCALE_FACTOR}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </mesh>
  );
};

const Model3DCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Model3D isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default Model3DCanvas;