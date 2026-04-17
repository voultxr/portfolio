import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const ParticleField = ({ count = 500 }) => {
  const points = useRef()
  
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ),
        speed: Math.random() * 0.02 + 0.005,
        angle: Math.random() * Math.PI * 2
      })
    }
    return temp
  }, [count])

  useFrame((state) => {
    if (points.current) {
      particles.forEach((particle, i) => {
        particle.angle += particle.speed
        points.current.geometry.attributes.position.array[i * 3] = Math.sin(particle.angle) * 3
        points.current.geometry.attributes.position.array[i * 3 + 1] = Math.cos(particle.angle * 0.7) * 3
        points.current.geometry.attributes.position.array[i * 3 + 2] += 0.01
        
        if (points.current.geometry.attributes.position.array[i * 3 + 2] > 10) {
          points.current.geometry.attributes.position.array[i * 3 + 2] = -10
        }
      })
      points.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length}
          array={new Float32Array(particles.flatMap(p => p.position.toArray()))}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#8b5cf6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export default ParticleField