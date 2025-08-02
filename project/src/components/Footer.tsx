import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center space-x-2 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Ayush Gokhe
            </span>
          </motion.div>

          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-6">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>and</span>
            <Code className="w-4 h-4 text-indigo-400" />
            <span>by Ayush Gokhe</span>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm">
              © {currentYear} Ayush Gokhe. All rights reserved.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center space-x-4 mt-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.3,
                  ease: "easeInOut" 
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};