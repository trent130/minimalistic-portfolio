import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  color?: string;
}

interface SkillCategories {
  [key: string]: {
    icon: string;
    skills: Skill[];
  };
}

const skillCategories: SkillCategories = {
  'Backend': {
    icon: '⚙️',
    skills: [
      { name: 'Python', level: 80, color: 'bg-yellow-500 dark:bg-yellow-600' },
      { name: 'Node.js', level: 50, color: 'bg-green-500 dark:bg-green-600' },
      { name: 'Django', level: 75, color: 'bg-green-600 dark:bg-green-700' },
      { name: 'Nest.js', level: 60, color: 'bg-red-500 dark:bg-red-600' }
    ]
  },
  'Database': {
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', level: 65, color: 'bg-blue-600 dark:bg-blue-700' },
      { name: 'MongoDB', level: 45, color: 'bg-green-500 dark:bg-green-600' },
      { name: 'Redis', level: 40, color: 'bg-red-500 dark:bg-red-600' },
      { name: 'SQL Optimization', level: 55, color: 'bg-purple-500 dark:bg-purple-600' }
    ]
  },
  'DevOps': {
    icon: '🚀',
    skills: [
      { name: 'Docker', level: 10, color: 'bg-sky-500 dark:bg-sky-600' },
      { name: 'CI/CD', level: 60, color: 'bg-green-600 dark:bg-green-700' },
      { name: 'Git', level: 90, color: 'bg-red-500 dark:bg-red-600' },
      { name: 'Linux', level: 70, color: 'bg-yellow-500 dark:bg-yellow-600' }
    ]
  },
  'Frontend': {
    icon: '🎨',
    skills: [
      { name: 'React.js', level: 60, color: 'bg-blue-500 dark:bg-blue-600' },
      { name: 'TypeScript', level: 40, color: 'bg-blue-400 dark:bg-blue-500' },
      { name: 'Next.js', level: 60, color: 'bg-black dark:bg-gray-700' },
      { name: 'Tailwind CSS', level: 75, color: 'bg-cyan-500 dark:bg-cyan-600' }
    ]
  }
};

const additionalSkills = [
  'API Design', 'Microservices', 'System Architecture', 'Performance Tuning',
  'Security', 'Testing', 'Code Review', 'Documentation'
];

export default function Skills() {
  return (
    <section id='skills' className="py-20 px-6 bg-gray-900 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-white font-mono">
            <span className="text-green-500">&gt;</span> skills --list
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Backend-focused expertise with full-stack capabilities.
            Specialized in building scalable server-side architectures and robust APIs.
          </p>
        </motion.div>

        {/* Terminal-style skills overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-lg p-6 mb-12 font-mono text-sm border border-gray-700"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400">~/skills</span>
          </div>
          <div className="space-y-2">
            <div className="text-green-400">
              <span className="text-blue-400">$</span> cat primary_focus.txt
            </div>
            <div className="text-white ml-4">
              Backend Development | API Architecture | Database Design
            </div>
            <div className="text-green-400 mt-3">
              <span className="text-blue-400">$</span> ls -la additional_skills/
            </div>
            <div className="text-gray-300 ml-4 grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
              {additionalSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-yellow-400"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillCategories).map(([category, { icon, skills }], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{icon}</span>
                <h3 className="text-xl font-semibold text-white font-mono">
                  {category}
                </h3>
              </div>
              
              <div className="space-y-6">
                {skills.map(({ name, level, color }, index) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.2) + (index * 0.1) }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-300 font-mono">
                        {name}
                      </span>
                      <span className="text-green-400 font-mono">
                        {level}%
                      </span>
                    </div>
                    <div className="relative">
                      <motion.div
                        className="h-2 bg-gray-700 rounded-full overflow-hidden"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: (categoryIndex * 0.2) + (index * 0.1),
                          duration: 0.5 
                        }}
                      >
                        <motion.div
                          className={`h-full ${color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: (categoryIndex * 0.2) + (index * 0.1) + 0.2,
                            duration: 0.5 
                          }}
                        />
                      </motion.div>
                      
                      {/* Animated dots for visual interest */}
                      <motion.div
                        className={`absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full ${color}`}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Backend specialization note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 bg-gray-800 rounded-lg p-6 border border-gray-700"
        >
          <div className="font-mono text-sm">
            <div className="text-gray-400 mb-2">// Specialization Focus</div>
            <div className="text-green-400">
              <span className="text-blue-400">const</span> expertise = {'{'}
            </div>
            <div className="text-white ml-4">
              primary: <span className="text-yellow-400">"Backend Architecture"</span>,
            </div>
            <div className="text-white ml-4">
              passion: <span className="text-yellow-400">"Scalable Systems"</span>,
            </div>
            <div className="text-white ml-4">
              goal: <span className="text-yellow-400">"Performance Optimization"</span>
            </div>
            <div className="text-green-400">{'}'}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

      { name: 'CI/CD', level: 60, color: 'bg-green-600 dark:bg-green-700' },
      { name: 'Git', level: 90, color: 'bg-red-500 dark:bg-red-600' }
    ]
  }
};

export default function Skills() {
  return (
    <section id='skills' className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            With years of experience in full-stack development, I've developed expertise
            in various technologies and tools across the development spectrum.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, { icon, skills }], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category}
                </h3>
              </div>
              
              <div className="space-y-6">
                {skills.map(({ name, level, color }, index) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.2) + (index * 0.1) }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {level}%
                      </span>
                    </div>
                    <div className="relative">
                      <motion.div
                        className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: (categoryIndex * 0.2) + (index * 0.1),
                          duration: 0.5 
                        }}
                      >
                        <motion.div
                          className={`h-full ${color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: (categoryIndex * 0.2) + (index * 0.1) + 0.2,
                            duration: 0.5 
                          }}
                        />
                      </motion.div>
                      
                      {/* Animated dots for visual interest */}
                      <motion.div
                        className={`absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full ${color}`}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional: Add a note about continuous learning */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-gray-600 dark:text-gray-400 italic"
        >
          * Continuously learning and improving these skills through practical applications
          and personal projects.
        </motion.p>
      </div>
    </section>
  );
}