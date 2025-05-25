'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Link from 'next/link'

const Navbar = () => {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const [lastScrollY, setLastScrollY] = useState(0)

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Hide navbar when scrolling up
    if (latest > lastScrollY && latest > 150) { // Only hide after scrolling down 150px
      setHidden(true)
    } else {
      setHidden(false)
    }
    setLastScrollY(latest)

    // Add blur effect when scrolled
    setScrolled(latest > 10)
  })

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ 
        y: hidden ? -100 : 0,
        transition: {
          duration: 0.3,
          ease: "easeInOut"
        }
      }}
      className="fixed w-full z-50 top-12"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-14">
          <div className="relative">
            {/* Blur box background */}
            <motion.div
              className={`absolute -inset-x-6 -inset-y-4 backdrop-blur-[30px] border border-white/5 shadow-xl rounded-2xl transition-colors duration-300 ${
                scrolled ? 'bg-gradient-to-r from-[#0a192f]/2 to-[#0a192f]/1' : 'bg-gradient-to-r from-[#0a192f]/1 to-transparent'
              }`}
              style={{ 
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.02)',
                backdropFilter: 'blur(30px) saturate(180%)'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            {/* Navigation items */}
            <div className="relative flex items-center space-x-6 px-4 py-2">
              <Link
                href="#about"
                className="text-gray-300 hover:text-[#64ffda] px-2 py-2 rounded-md text-sm font-medium relative group transition-transform duration-200 hover:scale-110"
              >
                About
              </Link>
              <Link
                href="/resume/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#64ffda] px-2 py-2 rounded-md text-sm font-medium relative group transition-transform duration-200 hover:scale-110"
              >
                Resume
              </Link>
              <Link
                href="#projects"
                className="text-gray-300 hover:text-[#64ffda] px-2 py-2 rounded-md text-sm font-medium relative group transition-transform duration-200 hover:scale-110"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-gray-300 hover:text-[#64ffda] px-2 py-2 rounded-md text-sm font-medium relative group transition-transform duration-200 hover:scale-110"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar 