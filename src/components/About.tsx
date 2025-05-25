'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import TechStack from './TechStack'
import { useEffect, useState } from 'react'

const About = () => {
  return (
    <>
      <section id="about" className="min-h-screen flex items-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
          <h2 className="text-3xl font-bold text-gray-300 mb-4">
            
        </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-300 mb-4"
                >
                  Om Sherikar
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#64ffda] via-[#a78bfa] to-[#64ffda] text-transparent bg-clip-text mb-6"
                >
                  I Build Innovative AI Solutions
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-gray-400 text-xl md:text-2xl leading-relaxed font-medium"
                >
                  Transforming ideas into intelligent systems through cutting-edge AI and machine learning. 
                  From computer vision to natural language processing, I create solutions that push the boundaries 
                  of what's possible with artificial intelligence.
                </motion.p>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/omsherikar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#64ffda] transition-all duration-300 p-2 rounded-full border border-gray-600 bg-gray-900/30 backdrop-blur-sm hover:backdrop-blur-md hover:translate-z-10 hover:shadow-[0_0_15px_rgba(100,255,218,0.2)] hover:scale-110"
                  >
                    <Image
                      src="/social/github.svg"
                      alt="GitHub"
                      width={24}
                      height={24}
                      className="invert"
                    />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/omsherikar0229"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#64ffda] transition-all duration-300 p-2 rounded-full border border-gray-600 bg-gray-900/30 backdrop-blur-sm hover:backdrop-blur-md hover:translate-z-10 hover:shadow-[0_0_15px_rgba(100,255,218,0.2)] hover:scale-110"
                  >
                    <Image
                      src="/social/linkedin.svg"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                      className="invert"
                    />
                  </motion.a>
                </div>
                
                {/* Explore My Work Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Link href="#projects">
                    <motion.button
                      className="group relative inline-flex items-center gap-2 bg-transparent text-[#64ffda] px-6 py-3 rounded-md overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Animated Border */}
                      <div className="absolute inset-0 rounded-md">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#64ffda] via-[#a78bfa] to-[#64ffda] animate-spin-slow opacity-50" />
                        <div className="absolute inset-[2px] bg-[#0a192f] rounded-md" />
                      </div>
                      
                      <span className="relative z-10">Explore My Work</span>
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 relative z-10"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </motion.svg>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#64ffda]/10 via-[#a78bfa]/10 to-[#64ffda]/10"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-[#64ffda]/5"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Right Column - Photo */}
            <div className="relative flex items-center justify-end">
              <div className="relative w-80 h-80 md:ml-auto md:mr-0">
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#64ffda] via-[#a78bfa] to-[#64ffda] animate-spin-slow" />
                {/* Photo Container */}
                <div className="absolute inset-1 rounded-full overflow-hidden bg-[#0a192f]">
                  <Image
                    src="/images/om.jpeg"
                    alt="Om Sherikar"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Resume Card Section - single large card with starry background and site theme */}
      <section className="w-full flex justify-center mt-8 px-4">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
          {/* Resume Card - Large Rectangle */}
          <div className="relative w-full md:w-[65%] h-[400px] bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#181f3a] rounded-3xl shadow-2xl flex flex-col justify-between p-8 md:p-12 overflow-hidden border border-white/10 backdrop-blur-xl transition-transform duration-300 hover:scale-[1.025] hover:shadow-[0_8px_40px_0_rgba(100,255,218,0.10)] group">
            {/* Starry background - client only */}
            <StarParticles width={900} height={400} count={100} />
            {/* Content */}
            <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
                <p className="text-gray-300 text-lg md:text-xl mb-1">Are you hiring?</p>
                <p className="text-gray-300 text-lg md:text-xl mb-4">Check out</p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">My Resume</h2>
              </div>
              <div className="flex items-end h-full">
                <a
                  href="/resume/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8"
                >
                  <span className="inline-block rounded-xl p-[2.5px] bg-gradient-to-r from-[#64ffda] via-[#a78bfa] to-[#64ffda] group-hover:from-[#a78bfa] group-hover:to-[#64ffda] transition-all duration-300">
                    <span className="block px-10 py-3 bg-[#0a192f] rounded-lg text-white text-xl font-semibold hover:bg-[#181f3a] transition-colors duration-300 shadow-lg">
                      View Resume
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* Email Card - Smaller Rectangle */}
          <div className="relative w-full md:w-[35%] h-[320px] bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#181f3a] rounded-3xl shadow-2xl flex flex-col justify-between p-8 md:p-10 overflow-hidden border border-white/10 backdrop-blur-xl transition-transform duration-300 hover:scale-[1.025] hover:shadow-[0_8px_40px_0_rgba(167,139,250,0.10)] group">
            {/* Starry background - client only */}
            <StarParticles width={600} height={320} count={60} />
            {/* Content */}
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <p className="text-gray-300 text-lg mb-2">Let's Connect</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Do You Want To Work With Me?</h3>
              </div>
              <div className="flex items-end h-full">
                <a
                  href="mailto:omsherikar0229@gmail.com"
                  className="mt-4"
                >
                  <span className="inline-block rounded-xl p-[2.5px] bg-gradient-to-r from-[#a78bfa] via-[#64ffda] to-[#a78bfa] group-hover:from-[#64ffda] group-hover:to-[#a78bfa] transition-all duration-300">
                    <span className="block px-10 py-3 bg-[#0a192f] rounded-lg text-white text-xl font-semibold hover:bg-[#232b4d] transition-colors duration-300 shadow-lg">
                      Send Email
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Tech Stack Section */}
        <TechStack />
    </>
  )
}

function StarParticles({ width, height, count }: { width: number; height: number; count: number }) {
  type Particle = { cx: number; cy: number; r: number; opacity: number }
  const [particles, setParticles] = useState<Particle[]>([])
  useEffect(() => {
    setParticles(
      Array.from({ length: count }).map(() => ({
        cx: Math.random() * width,
        cy: Math.random() * height,
        r: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      }))
    )
  }, [width, height, count])
  if (particles.length === 0) return null
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} fill="none">
        {particles.map((p, i) => (
          <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill="#fff" opacity={p.opacity} />
        ))}
      </svg>
    </div>
  )
}

export default About 