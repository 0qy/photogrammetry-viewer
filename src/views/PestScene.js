import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { Sky } from '@react-three/drei'

import Deer from '../components/Deer'

const PestScene = () => {
  const mountainObj = useLoader(OBJLoader, '/models/mountain.obj')

  return (
    <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 6, 5] }}>
      <Sky
        distance={450000}
        sunPosition={[5, 1, 8]}
        inclination={0}
        azimuth={0.25}
      />
      <OrbitControls />

      <ambientLight intensity={0.2} />
      <directionalLight color="orange" position={[0, 0, 5]} />

      <Stars
        radius={100} // Radius of the inner sphere (default=100)
        depth={50} // Depth of area where stars should fit (default=50)
        count={50000} // Amount of stars (default=5000)
        factor={4} // Size factor (default=4)
        saturation={0} // Saturation 0-1 (default=0)
        fade
        speed={1} // Faded dots (default=false)
      />

      <primitive object={mountainObj} scale={1} />
      <Deer />
    </Canvas>
  )
}

export default PestScene