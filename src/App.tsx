import { lazy, Suspense } from 'react';
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