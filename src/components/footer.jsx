import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { SiTelegram, SiGithub, SiLinkedin, SiBehance, SiDribbble } from 'react-icons/si'


const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: SiTelegram, url: 'https://t.me/voultxrr', label: 'Telegram' },
    { icon: SiGithub, url: 'https://github.com/voultxrr', label: 'GitHub' },
    { icon: SiLinkedin, url: '#', label: 'LinkedIn' },
    { icon: SiBehance, url: '#', label: 'Behance' },
    { icon: SiDribbble, url: '#', label: 'Dribbble' },
  ]

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ]

  return (
    <footer style={{
      padding: '60px 5% 30px',
      background: 'linear-gradient(180deg, var(--bg-dark) 0%, #050505 100%)',
      borderTop: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                fontSize: '24px',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '20px',
                cursor: 'pointer',
                display: 'inline-block'
              }}
            >
              voultxrr
            </motion.div>
            <p style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: 1.7, maxWidth: '250px' }}>
              Frontend Developer & Motion Designer. Создаю цифровые впечатления, которые запоминаются.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ 
              color: '#fff', 
              fontWeight: '600', 
              marginBottom: '20px',
              fontSize: '16px'
            }}>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    style={{
                      color: '#a1a1aa',
                      fontSize: '14px',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#8b5cf6'}
                    onMouseLeave={(e) => e.target.style.color = '#a1a1aa'}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h4 style={{ 
              color: '#fff', 
              fontWeight: '600', 
              marginBottom: '20px',
              fontSize: '16px'
            }}>Expertise</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['React / Next.js', 'Three.js / WebGL', 'After Effects', 'Framer Motion', 'UI/UX Design'].map((skill) => (
                <li key={skill}>
                  <span style={{ color: '#a1a1aa', fontSize: '14px' }}>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 style={{ 
              color: '#fff', 
              fontWeight: '600', 
              marginBottom: '20px',
              fontSize: '16px'
            }}>Connect</h4>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'var(--bg-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#a1a1aa',
                    fontSize: '18px',
                    textDecoration: 'none',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#8b5cf6'
                    e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#a1a1aa'
                    e.currentTarget.style.background = 'var(--bg-card)'
                  }}
                  title={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          paddingTop: '30px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p style={{ color: '#6b6b7a', fontSize: '14px' }}>
            © {currentYear} <strong style={{ color: '#8b5cf6' }}>voultxrr</strong>. All rights reserved.
          </p>
          
          <p style={{ color: '#6b6b7a', fontSize: '14px' }}>
            Made with <span style={{ color: '#ec4899' }}>❤</span> and lots of coffee ☕
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer