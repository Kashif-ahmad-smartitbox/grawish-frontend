import { motion } from 'framer-motion';
import { expertiseData } from '../../data/dummyData';
import { CheckCircle2 } from 'lucide-react';

const Expertise = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Team working on expertise" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                  <h4 className="text-xl font-bold mb-2">Award Winning Agency</h4>
                  <p className="text-sm text-white/80">Recognized for excellence in digital marketing and web development.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              {expertiseData.title}
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              {expertiseData.description}
            </p>

            <div className="space-y-8">
              {expertiseData.skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-800 font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-500" />
                      {skill.name}
                    </span>
                    <span className="text-slate-500 font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3 * index, ease: "easeOut" }}
                      className={`h-3 rounded-full ${
                        index % 2 === 0 ? 'bg-blue-500' : 'bg-purple-500'
                      }`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
