'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import type { PropsWithChildren, MouseEvent } from 'react'

const projects = [
  {
    title: 'Intelligent Beam Analyzer',
    description: 'Developed an AI-powered system achieving 95% accuracy in structural integrity predictions. Implemented optimization algorithms resulting in 30% reduction in material costs. Created a user-friendly GUI interface, increasing engineering workflow efficiency by 40%.',
    technologies: ['Python', 'NumPy', 'Machine Learning', 'Engineering Mechanics'],
    github: 'https://github.com/omsherikar/beam_analyzer_project',
    live: '#',
    image: '/projects/beam-analyzer.png'
  },
  {
    title: 'Smart Attendance System',
    description: 'Built a comprehensive system handling 1000+ student records with 99.9% uptime. Implemented offline synchronization reducing data loss by 100%. Optimized database queries, improving response time by 60%.',
    technologies: ['Python', 'MongoDB', 'GUI Framework', 'Data Synchronization'],
    github: 'https://github.com/omsherikar/Attendance',
    live: '#',
    image: '/projects/attendance-system.jpg'
  },
  {
    title: 'Advanced Face Recognition System',
    description: 'Developed a real-time face recognition system with 95% accuracy in varying lighting conditions. Implemented efficient algorithms reducing processing time by 40%. Integrated advanced feature extraction methods improving recognition accuracy by 25%.',
    technologies: ['Python', 'OpenCV', 'Deep Learning', 'Image Processing'],
    github: 'https://github.com/omsherikar/face_recognition',
    live: '#',
    image: '/projects/face-recognition.jpg'
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight bg-gradient-to-r from-[#64ffda] via-[#a78bfa] to-[#64ffda] text-transparent bg-clip-text"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotateY: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
              viewport={{ once: true }}
              className={`group relative flex flex-col h-full ${projects.length % 2 !== 0 && index === projects.length - 1 ? 'md:col-span-2 md:mx-auto md:w-1/2' : ''}`}
            >
              <TiltCard>
                <div className="relative flex flex-col h-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#181f3a] border border-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_8px_40px_0_rgba(100,255,218,0.13)]">
                  {/* Project Image */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a192f]/80 z-10" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 justify-between">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#64ffda] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="text-sm text-[#64ffda] bg-[#64ffda]/10 px-3 py-1 rounded-full backdrop-blur-sm"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 mt-auto">
                      <motion.div whileHover={{ x: 5 }}>
                        <a
                          href={project.github}
                          className="text-gray-400 hover:text-[#64ffda] transition-colors relative group/link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            GitHub
                          </span>
                        </a>
                      </motion.div>
                      <motion.div whileHover={{ x: 5 }}>
                        <a
                          href={project.live}
                          className="text-gray-400 hover:text-[#64ffda] transition-colors relative group/link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live Demo
                          </span>
                        </a>
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#64ffda]/5 via-[#a78bfa]/5 to-[#64ffda]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

// 3D Tilt Card Component
function TiltCard({ children }: PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const card = ref.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * 8 // max 8deg
    const rotateY = ((x - centerX) / centerX) * -8
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01,1.01,1.01)`
  }

  function handleMouseLeave() {
    const card = ref.current
    if (card) {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
    }
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-300"
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  )
}

export default Projects 