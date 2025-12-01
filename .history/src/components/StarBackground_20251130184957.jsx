import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";

// Star background component
const StarBackground = (props) => {
  const ref = useRef();

  // Generate random points within a sphere (memoized)
  const [sphere] = useState(() => {
    const count = 3000; // lower -> faster, higher -> denser stars
    const temp = new Float32Array(count * 3);
    const radius = 1.2;

    for (let i = 0; i < count * 3; i += 3) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.cbrt(Math.random()) * radius;

      temp[i] = r * Math.sin(phi) * Math.cos(theta);
      temp[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      temp[i + 2] = r * Math.cos(phi);
    }

    return temp;
  });

  // gentle rotation
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, 0.785398]}>
      {/* Points from drei */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        {/* 
          NOTE:
          - three.js ignores alpha in Color strings -> use opacity prop instead
          - increased size for visibility; adjust size to taste
        */}
        <PointMaterial
          transparent
          color="#ffffff"   // use hex / rgb without alpha
          opacity={0.18}    // control alpha via opacity prop
          size={0.01}       // increase if stars are too faint; try 0.01 - 0.02
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// Canvas wrapper (non-interactive background)
const StarsCanvas = () => (
  <div className="w-full h-full fixed inset-0 z-[2] pointer-events-none">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default StarsCanvas;