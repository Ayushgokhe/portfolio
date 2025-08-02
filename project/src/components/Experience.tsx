import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { Experience } from '../types';

export const ExperienceSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences: Experience[] = [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'Affinco Pvt. Ltd',
      period: '2024 - 2025',
      description: 'Leading development of enterprise web applications using React, Node.js, and AWS. Architecting scalable solutions.',
      type: 'work'
    },
    {
      id: 2,
      title: 'MERN Stack Developer',
      company: 'Rises Lab Pvt. Ltd',
      period: '2023 - 2024',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design and product teams to deliver high-quality solutions.',
      type: 'work'
    },
    {
      id: 3,
      title: 'React Developer',
      company: 'Clover Carte',
      period: '2023',
      description: 'Created responsive web applications and landing pages. Worked closely with designers to implement pixel-perfect UI components.',
      type: 'work'
    },
    // {
    //   id: 4,
    //   title: 'Master of Computer Science',
    //   company: 'University of Technology',
    //   period: '2017 - 2019',
    //   description: 'Specialized in Software Engineering and Web Technologies. Graduated Summa Cum Laude with focus on modern development practices.',
    //   type: 'education'
    // },
    {
      id: 4,
      title: 'Bachelor’s Degree',
      company: 'RTMNU University',
      period: '2018 - 2022',
      description: 'Discovered passion for coding during graduation. Built projects using JavaScript and Java. Self-taught in full stack development alongside academics.',
      type: 'education'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey in software development and continuous learning
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full hidden lg:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:space-x-8`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <motion.div
                    className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`p-2 rounded-lg mr-3 ${exp.type === 'work'
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                          : 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white'
                        }`}>
                        {exp.type === 'work' ? (
                          <Briefcase className="w-5 h-5" />
                        ) : (
                          <GraduationCap className="w-5 h-5" />
                        )}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                      {exp.company}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex items-center justify-center w-2/12">
                  <motion.div
                    className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    whileHover={{ scale: 1.5 }}
                  />
                </div>

                <div className="w-full lg:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { number: '10+', label: 'Projects Completed' },
            { number: '1+', label: 'Years Experience' },
            { number: '10+', label: 'Technologies Used' },
            { number: '100%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-gray-700"
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};