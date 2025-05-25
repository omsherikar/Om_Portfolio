'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import Image from 'next/image'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      console.log('Submitting form to: /api/contact')
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      console.log('Response status:', response.status)
      const data = await response.json()
      console.log('Response data:', data)

      if (response.ok) {
        toast.success('Message sent successfully!')
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
        })
      } else {
        const errorMessage = data.error || data.message || 'Something went wrong!'
        console.error('Form submission error:', errorMessage)
        toast.error(errorMessage)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const inputClasses = (fieldName: string) => `
    w-full bg-[#112240]/30 border-2 rounded-lg px-4 py-3 
    text-gray-300 placeholder-gray-500
    backdrop-blur-md
    transition-all duration-300
    ${focusedField === fieldName 
      ? 'border-[#64ffda] shadow-[0_0_15px_rgba(100,255,218,0.15)]' 
      : 'border-gray-700/50 hover:border-gray-600'
    }
    focus:outline-none focus:border-[#64ffda] focus:shadow-[0_0_20px_rgba(100,255,218,0.2)]
  `

  return (
    <section id="contact" className="py-20 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-tight bg-gradient-to-r from-[#64ffda] via-[#a78bfa] to-[#64ffda] text-transparent bg-clip-text"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Enhanced glassmorphism card effect with animated border */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-[#232b4d]/80 via-[#181f3a]/90 to-[#0a192f]/90 rounded-2xl" />
            <div className="absolute inset-0 border border-white/10 rounded-2xl" />
            <div className="absolute inset-0 rounded-2xl shadow-[0_8px_40px_0_rgba(100,255,218,0.10)]" />
          </div>

          <form onSubmit={handleSubmit} className="relative space-y-8 p-8 md:p-12 z-10 rounded-2xl bg-white/5 backdrop-blur-xl shadow-xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <label htmlFor="name" className="block text-white mb-2 text-lg font-semibold tracking-wide">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-4 text-lg text-white placeholder:text-gray-400 focus:border-[#64ffda] focus:ring-2 focus:ring-[#64ffda]/30 transition-all duration-200 outline-none shadow-md"
                placeholder="Enter your name"
                required
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <label htmlFor="email" className="block text-white mb-2 text-lg font-semibold tracking-wide">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-4 text-lg text-white placeholder:text-gray-400 focus:border-[#64ffda] focus:ring-2 focus:ring-[#64ffda]/30 transition-all duration-200 outline-none shadow-md"
                placeholder="Enter your email"
                required
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <label htmlFor="message" className="block text-white mb-2 text-lg font-semibold tracking-wide">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                rows={5}
                className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-4 text-lg text-white placeholder:text-gray-400 focus:border-[#64ffda] focus:ring-2 focus:ring-[#64ffda]/30 transition-all duration-200 outline-none shadow-md"
                placeholder="Enter your message"
                required
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="pt-2"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 0 30px #64ffda99'
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 rounded-xl p-[2.5px] bg-gradient-to-r from-[#64ffda] via-[#a78bfa] to-[#64ffda] transition-all duration-300 shadow-lg"
              >
                <span className="block w-full py-3 bg-[#0a192f]/80 rounded-lg text-white text-2xl font-bold hover:bg-[#181f3a] transition-colors duration-300 shadow-lg text-center">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <svg className="inline-block ml-2 -mt-1 w-6 h-6 text-[#64ffda]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13" /><path strokeLinecap="round" strokeLinejoin="round" d="M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                </span>
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-10 mb-6">
          <a
            href="https://github.com/omsherikar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#64ffda] transition-all duration-300 p-2 rounded-full border border-gray-600 bg-gray-900/30 backdrop-blur-sm hover:backdrop-blur-md hover:translate-z-10 hover:shadow-[0_0_15px_rgba(100,255,218,0.2)] hover:scale-110"
          >
            <Image src="/social/github.svg" alt="GitHub" width={28} height={28} className="invert" />
          </a>
          <a
            href="https://linkedin.com/in/omsherikar0229"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#64ffda] transition-all duration-300 p-2 rounded-full border border-gray-600 bg-gray-900/30 backdrop-blur-sm hover:backdrop-blur-md hover:translate-z-10 hover:shadow-[0_0_15px_rgba(100,255,218,0.2)] hover:scale-110"
          >
            <Image src="/social/linkedin.svg" alt="LinkedIn" width={28} height={28} className="invert" />
          </a>
        </div>
      </motion.div>
      {/* Footer - always visible at the bottom of the section */}
      <footer className="w-full text-center text-sm mt-12 pt-6 border-t border-white/10">
        <span className="bg-gradient-to-r from-[#64ffda] to-[#a78bfa] text-transparent bg-clip-text font-semibold text-base md:text-lg">
          © {new Date().getFullYear()} Om Sherikar. All rights reserved.
        </span>
      </footer>
    </section>
  )
}

export default Contact 