import { useTheme } from '@/hooks/useTheme';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Alex Johnson</h3>
            <p className="text-slate-400 mb-4">
              Computer Science Master's Graduate with expertise in AI, systems, and web development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <i className="fa-brands fa-medium"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#education" className="text-slate-400 hover:text-white transition-colors">Education</a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-white transition-colors">Skills</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-envelope"></i>
                <span>alex.johnson@example.com</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-phone"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-map-marker-alt"></i>
                <span>San Francisco, California</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {currentYear} Emma Chen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}