import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, TorusKnot, Icosahedron, Octahedron } from '@react-three/drei'

const FloatingShapes = () => {
  const shape1 = useRef()
  const shape2 = useRef()
  const shape3 = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (shape1.current) shape1.current.rotation.x = t * 0.2
    if (shape2.current) shape2.current.rotation.y = t * 0.3
    if (shape3.current) shape3.current.rotation.z = t * 0.25
  })

  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <TorusKnot ref={shape1} position={[-4, 2, -5]} args={[0.6, 0.2, 128, 32]}>
          <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />
        </TorusKnot>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
        <Icosahedron ref={shape2} position={[4, -1, -6]} args={[0.8, 0]}>
          <meshStandardMaterial color="#06b6d4" metalness={0.9} roughness={0.1} wireframe />
        </Icosahedron>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={2.5}>
        <Octahedron ref={shape3} position={[0, 3, -4]} args={[0.5, 0]}>
          <meshStandardMaterial color="#f472b6" metalness={0.7} roughness={0.3} />
        </Octahedron>
      </Float>
    </>
  )
}

export default FloatingShapes