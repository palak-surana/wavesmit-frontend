import { useState, useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Preload } from "@react-three/drei"
import * as THREE from "three"

// Component to create the star background
const StarBackground = (props) => {
    const ref = useRef() // Reference to the Points component
    // Generate random points within a sphere
    const [sphere] = useState(() => {
        // Create a smaller number of points and ensure they're all valid
        const count = 3000
        const temp = new Float32Array(count * 3)
        const radius = 1.2

        for (let i = 0; i < count * 3; i += 3) {
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)
            const r = Math.cbrt(Math.random()) * radius

            temp[i] = r * Math.sin(phi) * Math.cos(theta)
            temp[i + 1] = r * Math.sin(phi) * Math.sin(theta)
            temp[i + 2] = r * Math.cos(phi)
        }

        return temp
    })

    // Rotate the points on each frame
    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10
            ref.current.rotation.y -= delta / 15
        }
    })

    return (
        <group rotation={[0, 0, 0.785398]}>
            {" "}
            {/* 0.785398 radians = 45 degrees */}
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color="rgba(255,255,255,0.18)"
                    size={0.0015}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

// Component to render the star background within a canvas
const StarsCanvas = () => (
    <div className="w-full h-full fixed inset-0 z-[2] pointer-events-none">
        <Canvas camera={{ position: [0, 0, 1] }}>
            {/* Suspense to handle loading of the star background */}
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
            <Preload all /> {/* Preload all resources */}
        </Canvas>
    </div>
)

export default StarsCanvas
