import { lazy, Suspense, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import BackToTop from './components/BackToTop';

const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  useEffect(() => {
    // Update meta tags
    document.title = 'Lawrence Wafula | Full Stack Developer';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Full Stack Developer specializing in building scalable web applications with modern technologies.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Full Stack Developer specializing in building scalable web applications with modern technologies.';
      document.head.appendChild(meta);
    }

    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Lawrence Wafula | Full Stack Developer' },
      { property: 'og:description', content: 'Full Stack Developer specializing in building scalable web applications with modern technologies.' },
      { property: 'og:type', content: 'website' },
      // Add your website URL
      { property: 'og:url', content: 'https://your-portfolio-url.com' },
      // Add your preview image
      { property: 'og:image', content: 'https://your-portfolio-url.com/preview-image.jpg' }
    ];

    ogTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      }
    });
  }, []);

  return (
    <AnimatePresence>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </motion.main>
        </Suspense>
        <Footer />
        <BackToTop />
      </div>
    </AnimatePresence>
  );
}

export default App;