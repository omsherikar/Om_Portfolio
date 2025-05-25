'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const availableTechs = [
  { name: 'Next.js', icon: '/tech/nextjs.svg' },
  { name: 'React', icon: '/tech/react.svg' },
  { name: 'TypeScript', icon: '/tech/typescript.svg' },
  { name: 'Node.js', icon: '/tech/nodejs.svg' },
  { name: 'Python', icon: '/tech/python.svg' },
  { name: 'Git', icon: '/tech/git.svg' },
  { name: 'VS Code', icon: '/tech/vscode.svg' },
  { name: 'Docker', icon: '/tech/docker.svg' },
  { name: 'Linux', icon: '/tech/linux.svg' },
  { name: 'GitHub', icon: '/tech/github.svg' }
]

const techOffsets = [
  '-translate-y-2 rotate-[-3deg]',
  'translate-y-3 rotate-[2deg]',
  '-translate-y-4 rotate-[4deg]',
  'translate-y-2 rotate-[-2deg]',
  '-translate-y-1 rotate-[3deg]',
  'translate-y-4 rotate-[-4deg]',
  '-translate-y-3 rotate-[2deg]',
  'translate-y-1 rotate-[-2deg]',
  'translate-y-2 rotate-[3deg]',
  '-translate-y-3 rotate-[-3deg]'
]

const TechStack = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight bg-gradient-to-r from-[#64ffda] via-[#a78bfa] to-[#64ffda] text-transparent bg-clip-text"
      >
        Skills & Technologies
      </motion.h2>
      <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12">
        {availableTechs.map((tech, index) => (
          <motion.div
            key={tech.name}
            className={`flex flex-col items-center justify-center group transition-transform duration-300 ${techOffsets[index % techOffsets.length]}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{
              y: [0, -12, 0, 12, 0],
              rotate: [0, 4, 0, -4, 0]
            }}
            transition={{
              duration: 4 + (index % 3),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.18
            }}
            viewport={{ once: true }}
          >
            <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-[#64ffda]/20 via-[#a78bfa]/10 to-[#64ffda]/5 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <div className="absolute inset-0 rounded-full blur-xl opacity-60 group-hover:opacity-90 bg-gradient-to-br from-white/40 via-[#a78bfa]/40 to-[#64ffda]/30" />
              <Image
                src={tech.icon}
                alt={tech.name}
                fill
                className="object-contain p-3 drop-shadow-[0_0_12px_rgba(100,255,218,0.18)] filter brightness-150 contrast-125"
                priority
              />
            </div>
            <span className="text-white text-base font-semibold text-center mt-4">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TechStack 