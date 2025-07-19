import { motion } from 'framer-motion';

export default function Profile() {
  const profileImagePrompt = encodeURIComponent(`Professional headshot of a female computer science graduate, smiling confidently, wearing elegant business casual attire, soft lighting, clean background, professional yet approachable`);
  const profileImageUrl = `https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=%24%7BprofileImagePrompt%7D&sign=8699e3d6356fca752b572f863cd21ade`;
  
  return (
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2 mb-10 md:mb-0 flex justify-center"
      >
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-purple-100 dark:ring-purple-900/30">
            <img 
              src={profileImageUrl} 
              alt="Emma Chen - Computer Science Graduate" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-3 shadow-lg transform hover:scale-110 transition-transform">
            <i className="fa-solid fa-graduation-cap text-white text-xl"></i>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
          <span className="block">Hello, I'm</span>
          <span>Emma Chen</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
          Computer Science Master's Graduate
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <a 
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Me
          </a>
          <a 
            href="#projects"
            className="px-8 py-3 bg-white text-purple-600 border border-purple-200 rounded-full font-medium shadow-lg hover:shadow-xl hover:bg-purple-50 transition-all duration-300 transform hover:-translate-y-1"
          >
            View Projects
          </a>
        </div>
      </motion.div>
    </div>
  );
}