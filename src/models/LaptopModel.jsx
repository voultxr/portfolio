import React, { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

// Простая модель ноутбука из примитивов (если нет .glb файла)
const LaptopModel = (props) => {
  const group = useRef()
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={group} {...props} scale={1.5}>
        {/* Base */}
        <mesh position={[0, -0.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[3, 0.2, 2]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Screen */}
        <mesh position={[0, 0.8, -0.9]} rotation={[-0.2, 0, 0]} castShadow>
          <boxGeometry args={[2.8, 1.6, 0.1]} />
          <meshStandardMaterial color="#0f0f1a" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* Screen glow */}
        <mesh position={[0, 0.8, -0.85]} rotation={[-0.2, 0, 0]}>
          <planeGeometry args={[2.6, 1.4]} />
          <meshBasicMaterial color="#8b5cf6" transparent opacity={0.3} />
        </mesh>
        
        {/* Keyboard area */}
        <mesh position={[0, -0.4, 0.5]} rotation={[-0.3, 0, 0]}>
          <boxGeometry args={[2.5, 0.05, 1.2]} />
          <meshStandardMaterial color="#16213e" metalness={0.6} roughness={0.4} />
        </mesh>
      </group>
    </Float>
  )
}

export default LaptopModel

// Если хочешь загрузить реальную модель:
/*
useGLTF.preload('/models/laptop.glb')

const LaptopModel = (props) => {
  const { nodes, materials } = useGLTF('/models/laptop.glb')
  return (
    <Float speed={1.5}>
      <group {...props} dispose={null}>
        {/* Ваша модель здесь *\/}
      </group>
    </Float>
  )
}
*/