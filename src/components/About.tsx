// import { motion } from 'framer-motion';

// interface Skill {
//   name: string;
//   icon?: string;
//   color?: string;
// }

// const skills: Skill[] = [
//   { name: 'JavaScript/TypeScript', color: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100' },
//   { name: 'React.js', color: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100' },
//   { name: 'nest.js', color: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100' },
//   { name: 'Python', color: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100' },
//   // { name: 'AWS', color: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100' },
//   { name: 'Docker', color: 'bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-100' },
//   { name: 'Django', color: 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-100' },
//   { name: 'Postgresql', color: 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100' }
// ];

// export default function About() {
//   return (
//     <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors">
//       <div className="max-w-4xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-black">
//             About Me
//           </h2>
//           <div className="max-w-2xl mx-auto space-y-4">
//             <p className="text-gray-600 dark:text-gray-300">
//               I'm a passionate full-stack developer with 2 years of experience building
//               modern web applications. I love turning complex problems into simple,
//               beautiful, and intuitive solutions. Also currently working on my skills in machine learning in order to be good at artificial intelligence.
//               My journey in software development has led me to work with various technologies
//               and frameworks, always focusing on writing clean, maintainable code and
//               creating exceptional user experiences.
//             </p>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="space-y-8"
//         >
//           <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-black">
//             Technical Skills
//           </h3>
          
//           <div className="flex flex-wrap justify-center gap-3">
//             {skills.map((skill, index) => (
//               <motion.span
//                 key={skill.name}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ scale: 1.05, translateY: -2 }}
//                 className={`px-4 py-2 rounded-full ${skill.color} 
//                   shadow-sm hover:shadow-md transition-all duration-300
//                   cursor-default`}
//               >
//                 {skill.name}
//               </motion.span>
//             ))}
//           </div>

//           {/* Additional Sections */}
//           <div className="grid md:grid-cols-2 gap-8 mt-12">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800"
//             >
//               <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-black">
//                 What I Do
//               </h4>
//               <ul className="space-y-3 text-gray-600 dark:text-gray-300">
//                 <li>• Full-stack Web Development</li>
//                 <li>• API Design and Development</li>
//                 <li>• Cloud Infrastructure</li>
//                 <li>• Performance Optimization</li>
//               </ul>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800"
//             >
//               <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-black">
//                 My Approach
//               </h4>
//               <ul className="space-y-3 text-gray-600 dark:text-gray-300">
//                 <li>• Clean, Maintainable Code</li>
//                 <li>• User-Centered Design</li>
//                 <li>• Agile Development</li>
//                 <li>• Continuous Learning</li>
//               </ul>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

'use client'

import { motion } from 'framer-motion'

interface Technology {
  name: string
  icon: string
  color: string
}

export default function AboutMe() {
  const technologies: Technology[] = [
    { name: 'TypeScript', icon: '🔷', color: '#3178C6' },
    { name: 'Python', icon: '🐍', color: '#3776AB' },
    { name: 'React.js', icon: '⚛️', color: '#61DAFB' },
    { name: 'Java', icon: '☕', color: '#007396' },
    { name: 'JavaScript ES6+', icon: '💛', color: '#F7DF1E' },
    { name: 'C#', icon: '🎯', color: '#239120' }
  ]

  return (
    <section id="about" className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-black dark:text-white"
        >
          / about me
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:w-2/3 space-y-6"
          >
            <p className="text-lg leading-relaxed">
              I am currently a{' '}
              <motion.span
                whileHover={{ color: '#64ffda' }}
                className="text-black dark:text-white font-medium transition-colors"
              >
                Software Development Engineer at Amazon
              </motion.span>
              , working in the AWS sector under team Route 53. At the same time, I am
              undertaking a part-time{' '}
              <motion.span
                whileHover={{ color: '#64ffda' }}
                className="text-black  dark:text-white  font-medium transition-colors"
              >
                Master&apos;s of Science in Software Engineering
              </motion.span>{' '}
              at{' '}
              <motion.span
                whileHover={{ color: '#64ffda' }}
                className="text-black dark:text-white font-medium transition-colors"
              >
                University of Oxford
              </motion.span>
              .
            </p>

            <div className="space-y-4">
              <p className="text-lg font-medium text-black dark:text-white">
                Here are some technologies I have been working with:
              </p>
              <motion.ul 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 gap-4"
              >
                {technologies.map((tech, index) => (
                  <motion.li
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-3 group"
                  >
                    <span className="text-[#64ffda] transform group-hover:rotate-90 transition-transform duration-300">
                      ▹
                    </span>
                    <span className="flex items-center gap-2">
                      <span>{tech.icon}</span>
                      <span className="group-hover:text-black transition-colors">
                        {tech.name}
                      </span>
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg leading-relaxed"
            >
              Outside of work, I&apos;m interested in following the developments of
              science. I also play a lot of video games. And make TikToks.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:w-1/3 relative group"
          >
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <img
                src="
                "
                alt="Profile picture"
                width={400}
                height={400}
                // quality={95}
                // priority
                className="rounded-lg object-cover transition-all duration-300 
                  group-hover:scale-105 group-hover:rotate-2"
              />
              <div className="absolute inset-0 bg-[#64ffda]/10 
                mix-blend-multiply group-hover:bg-transparent 
                transition-colors duration-300" 
              />
            </div>
            <motion.div 
              className="absolute inset-0 border-2 border-[#64ffda] rounded-lg -z-10"
              initial={{ x: 20, y: 20 }}
              animate={{ x: 16, y: 16 }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut'
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}