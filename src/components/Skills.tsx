import { motion } from 'framer-motion';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';

export default function Skills() {
  const technicalSkills = [
    { name: "Programming", value: 90 },
    { name: "Algorithms", value: 85 },
    { name: "Machine Learning", value: 80 },
    { name: "System Design", value: 75 },
    { name: "Web Development", value: 85 },
    { name: "Cybersecurity", value: 70 },
  ];
  
  const programmingLanguages = [
    { name: "Python", level: 90, icon: "fa-python" },
    { name: "JavaScript", level: 85, icon: "fa-js" },
    { name: "Java", level: 80, icon: "fa-java" },
    { name: "C++", level: 75, icon: "fa-cpp" },
    { name: "Go", level: 65, icon: "fa-code" },
    { name: "TypeScript", level: 82, icon: "fa-code" },
  ];
  
  const toolsAndFrameworks = [
    { name: "React", level: 85 },
    { name: "TensorFlow", level: 75 },
    { name: "Docker", level: 70 },
    { name: "Kubernetes", level: 60 },
    { name: "Git", level: 85 },
    { name: "AWS", level: 70 },
  ];
  
  // Animation variants for skill cards
  const skillCardVariant = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };
  
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800/50">
       <div className="container mx-auto px-4">
         <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           viewport={{ once: true }}
           className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500"
         >
           Skills & Expertise
         </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Skills Radar Chart */}
          <motion.div 
            variants={skillCardVariant}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 md:p-8"
          >
            <h3 className="text-xl font-bold mb-6 text-center">Technical Proficiency</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={technicalSkills}>
                   <PolarGrid stroke="#e2e8f0" />
                   <PolarAngleAxis dataKey="name" tick={{ fill: '#64748b' }} />
                   <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#64748b' }} />
                   <Radar
                     name="Skills"
                     dataKey="value"
                     stroke="#8B5CF6"
                     fill="#8B5CF6"
                     fillOpacity={0.6}
                     animationDuration={1500}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Proficiency']} 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: 'none', 
                      borderRadius: '8px',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          
          {/* Programming Languages */}
          <motion.div 
            variants={skillCardVariant}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 md:p-8"
          >
            <h3 className="text-xl font-bold mb-6 text-center">Programming Languages</h3>
            <div className="space-y-6">
              {programmingLanguages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <i className={`fa-brands ${lang.icon} text-xl`}></i>
                      <span className="font-medium">{lang.name}</span>
                    </div>
                    <span className="text-sm text-slate-500">{lang.level}%</span>
                  </div>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${lang.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
                  >
                     <div 
                       className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                       style={{ width: `${lang.level}%` }}
                     ></div>  
                   </motion.div>
                 </div>
               ))}
             </div>
          </motion.div>
          
          {/* Tools & Frameworks */}
          <motion.div 
            variants={skillCardVariant}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 md:p-8 lg:col-span-2"
          >
            <h3 className="text-xl font-bold mb-8 text-center">Tools & Frameworks</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {toolsAndFrameworks.map((tool, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 text-center transition-transform duration-300 hover:scale-105"
                >
                   <div className="text-3xl mb-2 text-purple-600 dark:text-purple-400">
                     <i className="fa-solid fa-wrench"></i>
                   </div>
                   <h4 className="font-medium mb-1 text-slate-800 dark:text-slate-200">{tool.name}</h4>
                   <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                     <div 
                       className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                       style={{ width: `${tool.level}%` }}
                     ></div>
                   </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}