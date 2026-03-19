import { motion } from 'framer-motion';
import { statsData } from '../../data/dummyData';

const Stats = () => {
  return (
    <section className="py-20 relative bg-slate-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-blue-200 font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
