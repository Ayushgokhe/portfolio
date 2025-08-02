import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Skill } from '../types';

export const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills: Skill[] = [
    { name: 'React.js', level: 95, category: 'frontend' },
    { name: 'Html/CSS', level: 90, category: 'frontend' },
    { name: 'Ajax/JQuery', level: 88, category: 'frontend' },
    { name: 'JavaScript', level: 82, category: 'frontend' },
    { name: 'Node.js', level: 92, category: 'backend' },
    { name: 'Express.js', level: 88, category: 'backend' },
    { name: 'Java', level: 85, category: 'backend' },
    { name: '.NET', level: 83, category: 'backend' },
    { name: 'MongoDB', level: 87, category: 'database' },
    { name: 'MySQL', level: 85, category: 'database' },
    // { name: 'Redis', level: 78, category: 'database' },
    // { name: 'Firebase', level: 82, category: 'database' },/
    // { name: 'Docker', level: 80, category: 'devops' },
    // { name: 'AWS', level: 75, category: 'devops' },
    { name: 'Git/GitHub', level: 95, category: 'devops' },
    // { name: 'CI/CD', level: 78, category: 'devops' }
  ];

  const categories = {
    frontend: { title: 'Frontend', color: 'from-blue-500 to-cyan-500', icon: '🎨' },
    backend: { title: 'Backend', color: 'from-green-500 to-emerald-500', icon: '⚙️' },
    database: { title: 'Database', color: 'from-purple-500 to-indigo-500', icon: '🗄️' },
    devops: { title: 'DevOps', color: 'from-orange-500 to-red-500', icon: '🚀' }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="text-2xl mr-3">
                  {categories[category as keyof typeof categories].icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {categories[category as keyof typeof categories].title}
                </h3>
              </div>

              <div className="space-y-4">
                {categorySkills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${categories[category as keyof typeof categories].color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Circular Progress Alternative */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Years of Experience
          </h3>
          <div className="flex justify-center space-x-12">
            {[
              { label: 'Web Development', years: '1+' },
              { label: 'React Ecosystem', years: '1+' },
              { label: 'Backend APIs', years: '1+' },
              // { label: 'Cloud Platforms', years: 2 }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              >
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-200 dark:text-gray-700"
                    />
                    <motion.path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: "0 100" }}
                      animate={inView ? { strokeDasharray: `${(item.years / 5) * 100} 100` } : {}}
                      transition={{ duration: 2, delay: 0.8 + index * 0.1 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366F1" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                      {item.years}
                    </span>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};