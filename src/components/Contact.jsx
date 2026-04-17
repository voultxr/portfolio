import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiSend, FiCheck } from 'react-icons/fi'
import { SiTelegram, SiGithub, SiLinkedin, SiBehance } from 'react-icons/si'


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle, sending, success, error

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    
    // Имитация отправки
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  const socialLinks = [
    { icon: SiTelegram, label: 'Telegram', url: 'https://t.me/voultxrr', color: '#0088cc' },
    { icon: SiGithub, label: 'GitHub', url: 'https://github.com/voultxrr', color: '#ffffff' },
    { icon: SiLinkedin, label: 'LinkedIn', url: '#', color: '#0077b5' },
    { icon: SiBehance, label: 'Behance', url: '#', color: '#0057ff' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="contact" className="section" style={{ 
      background: 'linear-gradient(180deg, #0d0d1a 0%, var(--bg-dark) 100%)' 
    }}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'start'
          }}
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <p style={{ color: '#06b6d4', fontSize: '16px', fontWeight: '600', marginBottom: '15px' }}>
              GET IN TOUCH
            </p>
            
            <h2 style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)', 
              fontWeight: '700',
              marginBottom: '25px',
              lineHeight: 1.2
            }}>
              Давайте создадим <span className="gradient-text">что-то крутое</span> вместе
            </h2>
            
            <p style={{ 
              color: '#a1a1aa', 
              fontSize: '18px', 
              marginBottom: '40px',
              lineHeight: 1.7
            }}>
              Открыт для новых проектов, коллабораций и интересных предложений. 
              Напишите мне — я отвечу в течение 24 часов.
            </p>

            {/* Contact Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', marginBottom: '40px' }}>
              <motion.div 
                whileHover={{ x: 5 }}
                style={{ display: 'flex', alignItems: 'center', gap: '15px' }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(139, 92, 246, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#8b5cf6',
                  fontSize: '20px'
                }}>
                  <FiMail />
                </div>
                <div>
                  <p style={{ color: '#a1a1aa', fontSize: '14px' }}>Email</p>
                  <a href="mailto:hello@voultxrr.dev" style={{ 
                    color: '#fff', 
                    fontWeight: '500', 
                    textDecoration: 'none',
                    fontSize: '16px'
                  }}>hello@voultxrr.dev</a>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                style={{ display: 'flex', alignItems: 'center', gap: '15px' }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(6, 182, 212, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#06b6d4',
                  fontSize: '20px'
                }}>
                  <FiMapPin />
                </div>
                <div>
                  <p style={{ color: '#a1a1aa', fontSize: '14px' }}>Location</p>
                  <p style={{ color: '#fff', fontWeight: '500', fontSize: '16px' }}>Moscow, Russia</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <p style={{ color: '#a1a1aa', fontSize: '14px', marginBottom: '20px' }}>Follow me</p>
              <div style={{ display: 'flex', gap: '15px' }}>
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '12px',
                      background: 'var(--bg-card)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: social.color,
                      fontSize: '20px',
                      textDecoration: 'none',
                      border: '1px solid rgba(255,255,255,0.05)',
                      transition: 'border-color 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = social.color}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
                    title={social.label}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={itemVariants}
            style={{
              background: 'var(--bg-card)',
              borderRadius: '24px',
              padding: '40px',
              border: '1px solid rgba(255,255,255,0.05)'
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ 
                  display: 'block', 
                  color: '#a1a1aa', 
                  fontSize: '14px', 
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '15px 20px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.3s, box-shadow 0.3s'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#8b5cf6'
                    e.target.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                    e.target.style.boxShadow = 'none'
                  }}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label style={{ 
                  display: 'block', 
                  color: '#a1a1aa', 
                  fontSize: '14px', 
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>Your Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '15px 20px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.3s, box-shadow 0.3s'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#8b5cf6'
                    e.target.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                    e.target.style.boxShadow = 'none'
                  }}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label style={{ 
                  display: 'block', 
                  color: '#a1a1aa', 
                  fontSize: '14px', 
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '15px 20px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '16px',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.3s, box-shadow 0.3s'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#8b5cf6'
                    e.target.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                    e.target.style.boxShadow = 'none'
                  }}
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                style={{
                  padding: '16px 40px',
                  background: status === 'success' ? '#22c55e' : 'var(--gradient-1)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '30px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: status === 'idle' ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  marginTop: '10px',
                  opacity: status === 'sending' ? 0.7 : 1,
                  transition: 'all 0.3s ease'
                }}
              >
                {status === 'sending' && (
                  <div style={{
                    width: '20px',
                    height: '20px',
                    border: '2px solid rgba(255,255,255,0.3)',
                    borderTop: '2px solid white',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }} />
                )}
                {status === 'success' ? (
                  <>
                    <FiCheck /> Message Sent!
                  </>
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </motion.button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    color: '#22c55e',
                    fontSize: '14px',
                    textAlign: 'center',
                    marginTop: '10px'
                  }}
                >
                  ✓ Спасибо! Я свяжусь с вами скоро.
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
