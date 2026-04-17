import React from 'react'
import { motion } from 'framer-motion'
import { SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiNodedotjs, SiGit, SiFigma, SiAdobephotoshop, SiAdobepremierepro, SiAdobeaftereffects } from 'react-icons/si'


const Skills = () => {
  const frontendSkills = [
    { name: 'React', icon: SiReact, color: '#61dafb' },
    { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
    { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572b6' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Git', icon: SiGit, color: '#f05032' },
    { name: 'Figma', icon: SiFigma, color: '#f24e1e' },
  ]

  const motionSkills = [
    { name: 'After Effects', icon: SiAdobeaftereffects, color: '#9999FF' },
    { name: 'Premiere Pro', icon: SiAdobepremierepro, color: '#97309b' },
    { name: 'Photoshop', icon: SiAdobephotoshop, color: '#31A8FF' },
    { name: 'Lottie', icon: () => '🎬', color: '#00D1A0' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  }

  return (
    <section id="skills" className="section" style={{ background: 'linear-gradient(180deg, var(--bg-dark) 0%, #0d0d1a 100%)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <p style={{ color: '#06b6d4', fontSize: '16px', fontWeight: '600', marginBottom: '15px' }}>
            MY SKILLS
          </p>
          <h2 style={{ 
            fontSize: 'clamp(32px, 5vw, 48px)', 
            fontWeight: '700',
            marginBottom: '20px'
          }}>
            Технологии, которыми <span className="gradient-text">я владею</span>
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
            Комбинирую технические навыки с креативным мышлением для создания 
            уникальных цифровых решений
          </p>
        </motion.div>

        {/* Frontend Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ marginBottom: '80px' }}
        >
          <h3 style={{ 
            fontSize: '24px', 
            fontWeight: '600', 
            marginBottom: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <SiReact style={{ color: '#61dafb' }} />
            Frontend Development
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '20px'
          }}>
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{
                  padding: '25px 20px',
                  background: 'var(--bg-card)',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '15px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = skill.color}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
              >
                <skill.icon style={{ 
                  width: '40px', 
                  height: '40px', 
                  color: skill.color,
                  transition: 'transform 0.3s ease'
                }} />
                <span style={{ 
                  fontWeight: '500', 
                  fontSize: '14px',
                  color: '#e4e4e7'
                }}>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Motion Design Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 style={{ 
            fontSize: '24px', 
            fontWeight: '600', 
            marginBottom: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <SiAdobeaftereffects style={{ color: '#9999FF' }} />
            Motion Design & Video
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '20px'
          }}>
            {motionSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{
                  padding: '25px 20px',
                  background: 'var(--bg-card)',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '15px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = skill.color}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
              >
                {typeof skill.icon === 'function' && skill.icon.toString() === '() => \'🎬\'' ? (
                  <span style={{ fontSize: '40px' }}>🎬</span>
                ) : (
                  <skill.icon style={{ 
                    width: '40px', 
                    height: '40px', 
                    color: skill.color,
                    transition: 'transform 0.3s ease'
                  }} />
                )}
                <span style={{ 
                  fontWeight: '500', 
                  fontSize: '14px',
                  color: '#e4e4e7'
                }}>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Adobe logos showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            marginTop: '60px',
            padding: '30px',
            background: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(6,182,212,0.1) 100%)',
            borderRadius: '20px',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <SiAdobeaftereffects style={{ width: '50px', height: '50px', color: '#9999FF' }} />
            <span style={{ color: '#a1a1aa', fontSize: '16px' }}>Adobe After Effects</span>
          </div>
          <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <SiAdobepremierepro style={{ width: '50px', height: '50px', color: '#97309b' }} />
            <span style={{ color: '#a1a1aa', fontSize: '16px' }}>Adobe Premiere Pro</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills