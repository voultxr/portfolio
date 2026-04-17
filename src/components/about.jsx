import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}  
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'center'
          }}
        >
          {/* Image */}
          <motion.div variants={itemVariants} style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              aspectRatio: '3/4',
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
              boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.4)'
            }}>
              <img 
                src="/img/profile.png"
                alt="voultxrr"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,10,0.8), transparent 50%)'
              }} />
            </div>
            
            {/* Floating badge */}
            <motion.div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-20px',
                padding: '20px 30px',
                background: 'var(--bg-card)',
                borderRadius: '15px',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p style={{ fontSize: '14px', color: '#a1a1aa' }}>Experience</p>
              <p style={{ fontSize: '24px', fontWeight: '700', color: '#8b5cf6' }}>3+ Years</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants}>
            <motion.p 
              style={{ color: '#06b6d4', fontSize: '16px', fontWeight: '600', marginBottom: '15px' }}
              variants={itemVariants}
            >
              ABOUT ME
            </motion.p>
            
            <h2 style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)', 
              fontWeight: '700', 
              marginBottom: '25px',
              lineHeight: 1.2
            }}>
              Превращаю идеи в <span className="gradient-text">цифровую реальность</span>
            </h2>
            
            <p style={{ 
              color: '#a1a1aa', 
              fontSize: '18px', 
              marginBottom: '20px',
              lineHeight: 1.8
            }}>
              Я <strong style={{ color: '#fff' }}>Frontend разработчик</strong> и <strong style={{ color: '#fff' }}>Motion Designer</strong>, 
              специализирующийся на создании современных веб-приложений с плавными анимациями 
              и захватывающими визуальными эффектами.
            </p>
            
            <p style={{ 
              color: '#a1a1aa', 
              fontSize: '18px', 
              marginBottom: '30px',
              lineHeight: 1.8
            }}>
              Моя страсть — объединять чистый код с креативным дизайном, создавая 
              интерфейсы, которые не только работают безупречно, но и дарят 
              пользователям незабываемые эмоции.
            </p>

            {/* Stats */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '20px',
              marginBottom: '30px'
            }}>
              {[
                { num: '50+', label: 'Projects' },
                { num: '30+', label: 'Clients' },
                { num: '100%', label: 'Satisfaction' }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  variants={itemVariants}
                  style={{
                    padding: '20px',
                    background: 'var(--bg-card)',
                    borderRadius: '12px',
                    textAlign: 'center',
                    border: '1px solid rgba(255,255,255,0.05)'
                  }}
                >
                  <p style={{ 
                    fontSize: '28px', 
                    fontWeight: '700', 
                    background: 'var(--gradient-1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>{stat.num}</p>
                  <p style={{ color: '#a1a1aa', fontSize: '14px' }}>{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary">Давайте работать вместе</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About