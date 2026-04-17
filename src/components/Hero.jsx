import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows, Float } from '@react-three/drei'
import { motion } from 'framer-motion'

// ✅ Правильные импорты с относительными путями:
import ParticleField from '../models/ParticleField'
import FloatingShapes from '../models/FloatingShapes'
import LaptopModel from '../models/LaptopModel'

const Hero = () => {
  return (
    <section id="home" className="section" style={{ 
      padding: 0, 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* 3D Canvas Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}>
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
          
          <Suspense fallback={null}>
            <ParticleField count={300} />
            <FloatingShapes />
            <LaptopModel position={[2.5, -1, 0]} />
            <Environment preset="city" />
            <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={20} blur={2} />
          </Suspense>
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 1, 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '0 5%'
      }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ maxWidth: '600px' }}
        >
          <motion.p 
            style={{ 
              color: '#06b6d4', 
              fontSize: '18px', 
              fontWeight: '600', 
              marginBottom: '20px',
              letterSpacing: '3px'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            HI, I'M
          </motion.p>
          
          <motion.h1 
            style={{ 
              fontSize: 'clamp(40px, 8vw, 72px)', 
              fontWeight: '900', 
              lineHeight: 1.1,
              marginBottom: '20px'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="gradient-text">voultxrr</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 style={{ 
              fontSize: 'clamp(20px, 4vw, 32px)', 
              fontWeight: '300', 
              color: '#a1a1aa',
              marginBottom: '10px'
            }}>
              Frontend Developer
            </h2>
            <h2 style={{ 
              fontSize: 'clamp(20px, 4vw, 32px)', 
              fontWeight: '300', 
              color: '#a1a1aa',
              marginBottom: '30px'
            }}>
              Motion Designer
            </h2>
          </motion.div>
          
          <motion.p 
            style={{ 
              color: '#a1a1aa', 
              fontSize: '18px', 
              marginBottom: '40px',
              maxWidth: '500px'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Создаю современные веб-интерфейсы с плавными анимациями и 
            захватывающими визуальными эффектами. Превращаю идеи в цифровой опыт.
          </motion.p>
          
          <motion.div 
            style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a href="#projects" className="btn btn-primary">Мои работы</a>
            <a href="#contact" className="btn btn-secondary">Связаться</a>
          </motion.div>
        </motion.div>

        {/* Right side - decorative */}
        <motion.div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '20px' }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div style={{
            padding: '15px 25px',
            background: 'rgba(139, 92, 246, 0.1)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <div style={{
              width: '12px',
              height: '12px',
              background: '#22c55e',
              borderRadius: '50%',
              animation: 'pulse 2s infinite'
            }} />
            <span style={{ color: '#a1a1aa', fontSize: '14px' }}>Available for work</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          color: '#a1a1aa',
          zIndex: 1
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span style={{ fontSize: '12px', letterSpacing: '2px' }}>SCROLL</span>
        <div style={{
          width: '1px',
          height: '60px',
          background: 'linear-gradient(to bottom, #8b5cf6, transparent)'
        }} />
      </motion.div>
    </section>
  )
}

export default Hero