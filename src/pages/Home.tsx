import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Profile from '@/components/Profile';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar style on scroll
      setScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'education', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

   return (
     <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
       <Navbar activeSection={activeSection} scrolled={scrolled} />
       
       <main>
         <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
           {/* Decorative elements */}
           <div className="absolute top-20 right-10 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
           <div className="absolute bottom-20 left-10 w-80 h-80 bg-pink-200 rounded-full filter blur-3xl opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
           <Profile />
         </section>
        
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
               <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">About Me</h2>
               <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl border border-purple-100 dark:border-purple-900/30">
                 <p className="text-lg mb-4 text-slate-700 dark:text-slate-300">
                   I'm a passionate Computer Science Master's graduate with expertise in artificial intelligence, machine learning, and full-stack development. 
                   My academic journey has equipped me with strong problem-solving skills and a deep understanding of computer science fundamentals.
                 </p>
                 <p className="text-lg mb-4 text-slate-700 dark:text-slate-300">
                   I specialize in developing intelligent systems and user-friendly applications. My research focuses on using AI to solve real-world problems, 
                   with particular interest in natural language processing and computer vision. I believe in creating technology that is both innovative and accessible.
                 </p>
                 <p className="text-lg text-slate-700 dark:text-slate-300">
                   Beyond coding, I enjoy mentoring women in tech, contributing to open-source projects that promote diversity, and exploring the intersection of art and technology.
                 </p>
              </div>
            </motion.div>
          </div>
        </section>
        
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}