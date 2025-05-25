import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Background from '@/components/Background'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Background />
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-40">
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
