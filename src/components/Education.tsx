import { motion } from 'framer-motion';

export default function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      university: "Stanford University",
      period: "2023 - 2025",
      description: "Specialized in Artificial Intelligence and Machine Learning. GPA: 3.8/4.0",
      achievements: [
        "Dean's List (2023, 2024)",
        "Research Assistant - AI Lab",
        "Published 2 papers on neural networks"
      ]
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      university: "University of California, Berkeley",
      period: "2019 - 2023",
      description: "Major in Computer Science with minor in Mathematics",
      achievements: [
        "Graduated with Honors",
        "Member of ACM Student Chapter",
        "Participated in 3 hackathons"
      ]
    }
  ];
  
   return (
     <section id="education" className="py-20 bg-white dark:bg-slate-800/50">
       <div className="container mx-auto px-4">
         <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           viewport={{ once: true }}
           className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500"
         >
           Education
         </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          {education.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
               className={`mb-12 relative ${index !== education.length - 1 ? 'after:absolute after:left-6 after:top-full after:h-12 after:w-0.5 after:bg-purple-300' : ''}`}
             >
               <div className="flex">
                 <div className="mr-6 flex flex-col items-center">
                   <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                     {index + 1}
                   </div>
                 </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-xl flex-1">
                   <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                     <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">{item.degree}</h3>
                     <span className="text-slate-500 dark:text-slate-400 font-medium">{item.period}</span>
                   </div>
                   
                   <h4 className="text-xl mb-3 text-slate-800 dark:text-slate-200">{item.university}</h4>
                   <p className="text-slate-600 dark:text-slate-300 mb-4">{item.description}</p>
                   
                   <div>
                    <h5 className="font-semibold mb-2">Achievements:</h5>
                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}