import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

interface NavbarProps {
  activeSection: string;
  scrolled: boolean;
}

export default function Navbar({ activeSection, scrolled }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Education', id: 'education' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }}
             className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500"
           >
             Emma Chen
           </motion.div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
               onClick={() => scrollToSection(item.id)}
               className={`relative transition-colors hover:text-purple-600 dark:hover:text-purple-400 ${
                 activeSection === item.id ? 'text-purple-600 dark:text-purple-400 font-medium' : ''
               }`}
             >
               {item.name}
               {activeSection === item.id && (
                 <motion.span
                   layoutId="active-underline"
                   className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                 />
                )}
              </button>
            ))}
            
           <button 
             onClick={toggleTheme}
             className="p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
             aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
           >
             {theme === 'light' ? (
               <i className="fa-solid fa-moon text-purple-600"></i>
             ) : (
               <i className="fa-solid fa-sun text-yellow-400"></i>
              )}
            </button>
          </div>
          
          <button className="md:hidden p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}