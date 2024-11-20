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
  'Frontend': {
    icon: '🎨',
    skills: [
      { name: 'React.js', level: 90, color: 'bg-blue-500 dark:bg-blue-600' },
      { name: 'TypeScript', level: 85, color: 'bg-blue-400 dark:bg-blue-500' },
      { name: 'Next.js', level: 80, color: 'bg-black dark:bg-gray-700' },
      { name: 'Tailwind CSS', level: 95, color: 'bg-cyan-500 dark:bg-cyan-600' }
    ]
  },
  'Backend': {
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 85, color: 'bg-green-500 dark:bg-green-600' },
      { name: 'Python', level: 80, color: 'bg-yellow-500 dark:bg-yellow-600' },
      { name: 'GraphQL', level: 75, color: 'bg-pink-500 dark:bg-pink-600' },
      { name: 'PostgreSQL', level: 85, color: 'bg-blue-600 dark:bg-blue-700' }
    ]
  },
  'DevOps': {
    icon: '🚀',
    skills: [
      { name: 'Docker', level: 80, color: 'bg-sky-500 dark:bg-sky-600' },
      { name: 'AWS', level: 75, color: 'bg-orange-500 dark:bg-orange-600' },
      { name: 'CI/CD', level: 85, color: 'bg-green-600 dark:bg-green-700' },
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