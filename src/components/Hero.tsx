import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useState, useEffect } from 'react';

interface SocialLink {
  icon: typeof FaGithub | typeof FaLinkedin | typeof FaTwitter;
  href: string;
  label: string;
}

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true); // State for scroll indicator visibility

  const socialLinks: SocialLink[] = [
    {
      icon: FaGithub,
      href: 'https://github.com/trent130',
      label: 'GitHub Profile'
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/lawrence-wafula-085034244',
      label: 'LinkedIn Profile'   
    },
    {
      icon: FaTwitter,
      href: 'https://twitter.com/py_str',
      label: 'Twitter Profile'
    }
  ];

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buttonVariants = {
    hover: { scale: 1.1, y: -10 },
    rest: { scale: 1, y: 0 },
  };

  if (isLoading) {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center px-6 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="text-center max-w-4xl mx-auto animate-pulse">
          <div className="w-48 h-48 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto mb-8" />
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded max-w-md mx-auto mb-4" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded max-w-sm mx-auto mb-6" />
          <div className="flex justify-center gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Lawrence Wafula
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Crafting elegant solutions to complex problems. Specialized in building scalable web applications with modern technologies.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              aria-label={label}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          {isVisible && (
            // Scroll Indicator
            <motion.div
              initial="rest"
              variants={buttonVariants}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, type: 'spring', stiffness: 300, damping: 10, repeat: Infinity, duration: 1.5 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
              whileHover="hover"
            >
              <p className="text-center mb-2">scroll down</p>
              <motion.svg
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

