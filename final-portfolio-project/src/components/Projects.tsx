import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useRef } from 'react';

interface ProjectsProps {
  inView: boolean;
}

export const Projects = ({ inView }: ProjectsProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('Projects in view:', inView);
  }, [inView]);

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          My Projects
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[1, 2, 3].map((project) => (
            <motion.div
              key={project}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Project {project}
                </h3>
                <p className="text-gray-600 mb-4">
                  A brief description of project {project} goes here.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
