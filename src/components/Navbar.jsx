import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
 
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    } 
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '20px 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        background: scrolled ? 'rgba(10, 10, 10, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        style={{
          fontSize: '28px',
          fontWeight: '900',
          background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          cursor: 'pointer'
        }}
      >
        voultxrr
      </motion.div>

      {/* Desktop Menu */}
      <div style={{ display: 'flex', gap: '40px' }}>
        {navItems.map((item, index) => (
          <Link
            key={item}
            to={item.toLowerCase()}
            smooth={true}
            duration={500}
            offset={-70}
            style={{
              color: '#a1a1aa',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer',
              position: 'relative',
              transition: 'color 0.3s ease'
            }}
            activeStyle={{ color: '#8b5cf6' }}
            onMouseEnter={(e) => e.target.style.color = '#8b5cf6'}
            onMouseLeave={(e) => e.target.style.color = '#a1a1aa'}
          >
            {item}
            <motion.div
              style={{
                position: 'absolute',
                bottom: '-5px',
                left: 0,
                width: '100%',
                height: '2px',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                transform: 'scaleX(0)',
                transformOrigin: 'right'
              }}
              whileHover={{ scaleX: 1, transformOrigin: 'left' }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div 
        style={{ display: 'none', cursor: 'pointer', fontSize: '24px' }}
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        {mobileMenu ? <FiX /> : <FiMenu />}
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '70%',
            height: '100vh',
            background: 'rgba(17, 17, 17, 0.98)',
            padding: '100px 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMobileMenu(false)}
              style={{
                color: '#ffffff',
                fontSize: '24px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar