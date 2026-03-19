import { motion } from 'framer-motion';
import { ArrowRight, Megaphone, Search, Monitor, Share2, MousePointerClick, PenTool } from 'lucide-react';
import { servicesData } from '../../data/dummyData';

const iconMap = {
  Megaphone,
  Search,
  Monitor,
  Share2,
  MousePointerClick,
  PenTool
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const ServicesGrid = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Services We Provide
            </h3>
            <p className="text-lg text-slate-600">
              We offer a comprehensive suite of digital solutions designed to elevate your brand, engage your audience, and drive measurable results.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Megaphone;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden"
              >
                {/* Decorative glow on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-purple-100/50 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 
                    ${index % 3 === 0 ? 'bg-blue-100 text-blue-600' : 
                      index % 3 === 1 ? 'bg-purple-100 text-purple-600' : 
                      'bg-pink-100 text-pink-600'} 
                    group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <a href="#" className="inline-flex items-center gap-2 font-semibold text-slate-800 hover:text-blue-600 transition-colors group/link">
                    Read More 
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
