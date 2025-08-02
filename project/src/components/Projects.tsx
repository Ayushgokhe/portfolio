import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects: Project[] = [
    {
      id: 1,
      title: 'Food Delivery App',
      description: 'Developed a responsive Food Delivery App UI using React.js with features like dynamic menus, cart system, responsive design, and smooth navigation using React Router.',
      image: '/foodImg.png',
      technologies: ['React'],
      liveUrl: 'https://food-delivery-app-3aoh.vercel.app/',
      githubUrl: 'https://github.com/Ayushgokhe/Food_Delivery_App'
    },
    {
      id: 2,
      title: 'SaasTreats App',
      description: 'SaaS Treats is a full-stack web application built with the MERN stack and styled using Tailwind CSS. It offers curated SaaS deals for startups and developers, with features like JWT-based authentication, admin deal management, and a responsive, modern UI. The platform focuses on clean design, smooth navigation, and real-time interactivity.',
      image: 'saasImg.png',
      technologies: ['React', 'Express', 'Node.js', 'MongoDB', 'Tailwind'],
      liveUrl: 'https://saastreats.com/',
      githubUrl: 'https://github.com/Ayushgokhe'
    },
    {
      id: 3,
      title: 'Event App',
      description: 'Event Affiliate is a full-stack affiliate event listing platform developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It displays curated upcoming events with detailed information such as date, time, location, organizer, and registration links. Built with Tailwind CSS for a clean and responsive UI, the app allows users to browse and explore events seamlessly. It supports dynamic routing, affiliate tracking, and secure backend integration to manage event data efficiently.',
      image: '/eventImg.png',
      technologies: ['React', 'Express', 'Node.js', 'MongoDB'],
      liveUrl: 'https://aff-event-j9z9-git-main-ayushgokhe2001gmailcoms-projects.vercel.app/',
      githubUrl: 'https://github.com/Ayushgokhe'
    },
    {
      id: 4,
      title: 'Travel App',
      description: 'Travel Buddy is a full-stack travel booking and exploration app developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The app allows users to browse destinations, book trips, and manage their itineraries. It features user authentication, dynamic destination filtering, and a responsive interface built with Tailwind CSS. The backend manages user data and trip records securely, while the frontend delivers a smooth and engaging travel planning experience.',
      image: '/travelimg.png',
      technologies: ['React', 'Express', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Ayushgokhe/travelapp'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Element */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* <motion.button
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
};