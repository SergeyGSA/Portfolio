import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'

import * as random from 'maath/random/dist/maath-random.cjs'

interface IRotationRef {
  rotation: { x: number; y: number }
}

const Stars: React.FC = (props) => {
  const ref = useRef<IRotationRef>()

  const sphere = random.inSphere(new Float32Array(5001), { radius: 1.2 })
  const positions = Float32Array.from(sphere)

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* @ts-expect-error */}
      <Points ref={ref} positions={positions} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas: React.FC = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas
