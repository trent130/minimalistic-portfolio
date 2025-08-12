import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaTerminal } from "react-icons/fa";
import { useState, useEffect } from "react";

interface SocialLink {
  icon: typeof FaGithub | typeof FaLinkedin | typeof FaTwitter;
  href: string;
  label: string;
}

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const socialLinks: SocialLink[] = [
    {
      icon: FaGithub,
      href: "https://github.com/trent130",
      label: "GitHub Profile",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/lawrence-wafula-085034244",
      label: "LinkedIn Profile",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/py_str",
      label: "Twitter Profile",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* const buttonVariants = {
    hover: { scale: 1.1, y: -10 },
    rest: { scale: 1, y: 0 },
  }; */

  const mouseVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
  };

  // const scrollVariants = {
  //   initial: { opacity: 0, y: -20 },
  //   animate: {
  //     opacity: 1,
  //     y: 20,
  //     transition: {
  //       duration: 1,
  //       repeat: Infinity,
  //       ease: "linear",
  //     },
  //   },
  // };

  if (isLoading) {
    return (
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 bg-gray-50 dark:bg-gray-900 transition-colors"
      >
        <div className="text-center max-w-4xl mx-auto animate-pulse">
          <div className="w-48 h-48 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto mb-8" />
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded max-w-md mx-auto mb-4" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded max-w-sm mx-auto mb-6" />
          <div className="flex justify-center gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <FaTerminal className="text-3xl md:text-4xl text-green-500" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-mono">
              Lawrence Wafula
            </h1>
          </div>
          <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 mb-6 font-mono text-left max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm">~/portfolio</span>
            </div>
            <div className="text-green-400">
              <span className="text-blue-400">$</span> whoami
            </div>
            <div className="text-white mt-1">Full Stack Developer</div>
            <div className="text-green-400 mt-2">
              <span className="text-blue-400">$</span> cat specialties.txt
            </div>
            <div className="text-white mt-1">Backend Architecture | API Design | Database Optimization</div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Building robust server-side solutions and scalable architectures.
            Specialized in API development, database design, and system optimization.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-4 text-sm font-mono">
            <span className="bg-gray-800 dark:bg-gray-700 text-green-400 px-3 py-1 rounded">
              Python
            </span>
            <span className="bg-gray-800 dark:bg-gray-700 text-blue-400 px-3 py-1 rounded">
              Node.js
            </span>
            <span className="bg-gray-800 dark:bg-gray-700 text-purple-400 px-3 py-1 rounded">
              PostgreSQL
            </span>
            <span className="bg-gray-800 dark:bg-gray-700 text-orange-400 px-3 py-1 rounded">
              Docker
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-4 mb-8"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-800 dark:bg-gray-700 text-gray-300 hover:text-green-400 
                transition-colors rounded-lg border border-gray-700 dark:border-gray-600"
              aria-label={label}
              variants={mouseVariants}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 font-mono text-left max-w-md mx-auto"
        >
          <div className="text-gray-400 text-sm mb-2">// Current Status</div>
          <div className="text-green-400">
            <span className="text-blue-400">const</span> status = {'{'}
          </div>
          <div className="text-white ml-4">
            available: <span className="text-green-400">true</span>,
          </div>
          <div className="text-white ml-4">
            focus: <span className="text-yellow-400">"Backend Development"</span>,
          </div>
          <div className="text-white ml-4">
            learning: <span className="text-yellow-400">"Machine Learning"</span>
          </div>
          <div className="text-green-400">{'}'}</div>
        </motion.div>

        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="container_mouse flex flex-col items-center">
              <motion.div
                className="mouse-btn border-green-500"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="mouse-scroll bg-green-500"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: 20,
                    transition: {
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                />
              </motion.div>
              <span className="text-gray-600 dark:text-gray-400 mt-2 font-mono text-sm">
                scroll --down
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Crafting elegant solutions to complex problems. Specialized in
            building scalable web applications with modern technologies.
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
              variants={mouseVariants}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="container_mouse flex flex-col items-center">
              <motion.div
                className="mouse-btn"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="mouse-scroll"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: 20,
                    transition: {
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                />
              </motion.div>
              <span className="text-gray-600 dark:text-gray-400 mt-2">
                Scroll Down
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
