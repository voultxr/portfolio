import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Frontend',
      description: 'Современный интернет-магазин с анимациями, корзиной и интеграцией платежей. Полностью адаптивный дизайн.',
      image: '/img/1.png',
      tags: ['React', 'Three.js', 'Stripe', 'Framer Motion'],
      link: '#',
      github: '#',
      color: '#8b5cf6'
    },
    {
      id: 2,
      title: 'Motion Showreel 2024',
      category: 'Motion Design',
      description: 'Динамичный шоурил с анимациями, переходами и визуальными эффектами в After Effects.',
      image: '/img/2.png',
      tags: ['After Effects', 'Premiere Pro', 'Lottie'],
      link: 'https://youtu.be/E-fdPfRxkzQ?si=ulamwhxlUzyDf6Jz',
      github: null,
      color: '#06b6d4'
    },
    {
      id: 3,
      title: '3D Portfolio Template',
      category: 'Frontend + 3D',
      description: 'Интерактивное 3D портфолио с WebGL анимациями, частицами и плавными переходами.',
      image: '/img/3.png',
      tags: ['React Three Fiber', 'GLSL', 'Blender'],
      link: '#',
      github: '#',
      color: '#f472b6'
    },
    {
      id: 4,
      title: 'Dashboard Analytics',
      category: 'Frontend',
      description: 'Аналитическая панель с графиками, анимированными виджетами и темной темой.',
      image: '/img/4.png',
      tags: ['React', 'D3.js', 'Tailwind', 'WebSocket'],
      link: '#',
      github: '#',
      color: '#22c55e'
    },
    {
      id: 5,
      title: 'Brand Animation Pack',
      category: 'Motion Design',
      description: 'Набор анимированных логотипов и переходов для брендинга. Экспорт в Lottie.',
      image: '/img/5.png',
      tags: ['After Effects', 'Bodymovin', 'Illustrator'],
      link: '#',
      github: null,
      color: '#eab308'
    },
    {
      id: 6,
      title: 'Social Media App',
      category: 'Full Stack',
      description: 'Социальная платформа с лентой, чатами и анимированными взаимодействиями.',
      image: '/img/6.png',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      link: '#',
      github: '#',
      color: '#ec4899'
    }
  ]

  const categories = ['All', 'Frontend', 'Motion Design', 'Frontend + 3D', 'Full Stack']
  const [filter, setFilter] = useState('All')

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <p style={{ color: '#06b6d4', fontSize: '16px', fontWeight: '600', marginBottom: '15px' }}>
            MY WORK
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '700', marginBottom: '20px' }}>
            Избранные <span className="gradient-text">проекты</span>
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
            Коллекция работ, демонстрирующих мои навыки в разработке и моушн-дизайне
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '50px', flexWrap: 'wrap' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '10px 25px',
                background: filter === cat ? 'var(--gradient-1)' : 'var(--bg-card)',
                color: filter === cat ? 'white' : '#a1a1aa',
                border: 'none',
                borderRadius: '25px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              style={{
                background: 'var(--bg-card)',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '25px' }}>
                <span style={{ fontSize: '12px', fontWeight: '600', color: project.color, textTransform: 'uppercase' }}>
                  {project.category}
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: '600', margin: '10px 0', color: '#fff' }}>
                  {project.title}
                </h3>
                <p style={{ color: '#a1a1aa', fontSize: '14px', marginBottom: '20px' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} style={{
                      padding: '5px 12px',
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '15px',
                      fontSize: '12px',
                      color: '#a1a1aa'
                    }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#a1a1aa', fontSize: '14px', textDecoration: 'none'}}>
                    <FiExternalLink /> Live Demo
                  </a>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#a1a1aa', fontSize: '14px', textDecoration: 'none'}}>
                      <FiGithub /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(10,10,10,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' }}
          >
            <motion.div
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              style={{ background: 'var(--bg-card)', borderRadius: '24px', maxWidth: '800px', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', overflow: 'hidden' }}
            >
              <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ padding: '30px' }}>
                <button onClick={() => setSelectedProject(null)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '35px', height: '35px', color: 'white', cursor: 'pointer' }}>✕</button>
                <span style={{ fontSize: '12px', fontWeight: '600', color: selectedProject.color }}>{selectedProject.category}</span>
                <h3 style={{ fontSize: '24px', fontWeight: '700', margin: '10px 0', color: '#fff' }}>{selectedProject.title}</h3>
                <p style={{ color: '#a1a1aa', marginBottom: '20px' }}>{selectedProject.description}</p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '25px' }}>
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} style={{ padding: '5px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', fontSize: '12px' }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <a href={selectedProject.link} target="_blank" className="btn btn-primary" style={{ padding: '10px 25px', fontSize: '14px' }}><FiExternalLink style={{ marginRight: '5px' }} /> Live Demo</a>
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" className="btn btn-secondary" style={{ padding: '10px 25px', fontSize: '14px' }}><FiGithub style={{ marginRight: '5px' }} /> Code</a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects