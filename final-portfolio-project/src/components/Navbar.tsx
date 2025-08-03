import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Portfolio
          </Link>
          <div className="hidden md:flex space-x-8">
            {[
              { name: 'Home', href: '/' },
              { name: 'Projects', href: '/projects' },
              { name: 'Contact', href: '/contact' },
            ].map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                className="transition-colors hover:text-blue-600"
              >
                <Link to={item.href}>{item.name}</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
