import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "AI-Powered Recommendation System",
      description: "Developed a machine learning-based recommendation engine using collaborative filtering and neural networks, achieving 85% accuracy in user preference prediction.",
      image: encodeURIComponent("AI recommendation system interface, dashboard showing user preferences and recommendation algorithms, modern UI design"),
      category: "ai",
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"]
    },
    {
      id: 2,
      title: "Distributed File System",
      description: "Designed and implemented a fault-tolerant distributed file system with replication and sharding capabilities, ensuring 99.9% uptime and data integrity.",
      image: encodeURIComponent("Distributed file system architecture visualization, data flow between multiple nodes, technical diagram"),
      category: "systems",
      technologies: ["Go", "gRPC", "Docker", "Kubernetes"]
    },
    {
      id: 3,
      title: "Cybersecurity Threat Detection",
      description: "Built an intrusion detection system using anomaly detection algorithms and behavioral analytics to identify potential security threats in real-time.",
      image: encodeURIComponent("Cybersecurity dashboard showing threat detection metrics, network security visualization, alert system interface"),
      category: "security",
      technologies: ["C++", "Wireshark", "Snort", "ELK Stack"]
    },
    {
      id: 4,
      title: "Full-Stack Web Application",
      description: "Created a responsive web application with React frontend and Node.js backend, implementing RESTful APIs and real-time features using WebSockets.",
      image: encodeURIComponent("Modern web application dashboard, responsive design across devices, clean UI with data visualizations"),
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Express", "WebSocket"]
    }
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'systems', name: 'Systems' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'web', name: 'Web Development' }
  ];
  
  return (
    <section id="projects" className="py-20">
       <div className="container mx-auto px-4">
         <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           viewport={{ once: true }}
           className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500"
         >
           Projects
         </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12"
        >
          Explore my portfolio of technical projects showcasing my skills in computer science and software development.
        </motion.p>
        
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className="flex space-x-2 md:space-x-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                 className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                   activeCategory === category.id
                     ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                     : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-slate-700'
                 }`}
               >
                 {category.name}
               </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => {
            const imageUrl = `https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=%24%7Bproject.image%7D&sign=106ad8dea56d348c84fd2d7b9d16500d`;
            
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
               className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 border border-purple-100 dark:border-purple-900/20"
             >
               <div className="relative h-48 overflow-hidden rounded-t-2xl">
                 <img 
                   src={imageUrl} 
                   alt={project.title} 
                   className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                   <div className="p-4 text-white">
                     <a href="#" className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm hover:from-purple-600 hover:to-pink-600 transition-colors">
                       View Project <i className="fa-solid fa-arrow-right"></i>
                     </a>
                   </div>
                 </div>
               </div>
               
               <div className="p-6">
                 <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">{project.title}</h3>
                 <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                 
                 <div className="flex flex-wrap gap-2 mt-4">
                   {project.technologies.map((tech, i) => (
                     <span key={i} className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 rounded-full text-sm text-purple-700 dark:text-purple-300">
                       {tech}
                     </span>
                   ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}