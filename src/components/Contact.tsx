import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Get In Touch
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12"
        >
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400">
                  <i className="fa-solid fa-envelope text-xl"></i>
                </div>
               <div>
                 <h4 className="font-semibold text-lg mb-1">Email</h4>
                 <p className="text-slate-600 dark:text-slate-300">emma.chen@example.com</p>
               </div>
             </div>
             
             <div className="flex items-start gap-4">
               <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full text-purple-600 dark:text-purple-400">
                 <i className="fa-solid fa-phone text-xl"></i>
                </div>
               <div>
                 <h4 className="font-semibold text-lg mb-1">Phone</h4>
                 <p className="text-slate-600 dark:text-slate-300">+1 (555) 987-6543</p>
               </div>
             </div>
             
             <div className="flex items-start gap-4">
               <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full text-purple-600 dark:text-purple-400">
                 <i className="fa-solid fa-map-marker-alt text-xl"></i>
                </div>
               <div>
                 <h4 className="font-semibold text-lg mb-1">Location</h4>
                 <p className="text-slate-600 dark:text-slate-300">Seattle, Washington</p>
               </div>
             </div>
           </div>
           
           <div className="mt-12">
             <h4 className="font-semibold text-lg mb-4">Connect with me</h4>
             <div className="flex gap-4">
             <a 
               href="#" 
               className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full text-purple-600 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800/50 hover:text-purple-700 dark:hover:text-purple-200 transition-all transform hover:scale-110"
               aria-label="LinkedIn"
             >
               <i className="fa-brands fa-linkedin text-xl"></i>
             </a>
             
             <a 
               href="#" 
               className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full text-purple-600 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800/50 hover:text-purple-700 dark:hover:text-purple-200 transition-all transform hover:scale-110"
               aria-label="GitHub"
             >
               <i className="fa-brands fa-github text-xl"></i>
             </a>
             
             <a 
               href="#" 
               className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-full text-pink-600 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-pink-800/50 hover:text-pink-700 dark:hover:text-pink-200 transition-all transform hover:scale-110"
               aria-label="Twitter"
             >
               <i className="fa-brands fa-twitter text-xl"></i>
             </a>
             
             <a 
               href="#" 
               className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-full text-pink-600 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-pink-800/50 hover:text-pink-700 dark:hover:text-pink-200 transition-all transform hover:scale-110"
               aria-label="Medium"
             >
               <i className="fa-brands fa-medium text-xl"></i>
             </a>
           </div>
         </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
               <button
                 type="submit"
                 disabled={isSubmitting}
                 className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 transform hover:-translate-y-1"
               >
                 {isSubmitting ? (
                   <>
                     <i className="fa-solid fa-spinner fa-spin"></i>
                     Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="fa-solid fa-paper-plane"></i>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}