import { motion } from 'framer-motion';
import ServicesGrid from '../components/sections/ServicesGrid';
import Testimonials from '../components/sections/Testimonials';

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/50 to-purple-900/50 z-0"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center mt-10">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 text-center mt-12"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-purple-200 text-center max-w-2xl mx-auto"
          >
            Comprehensive digital marketing solutions to scale your business and dominate your industry.
          </motion.p>
        </div>
      </section>

      <ServicesGrid />
      
      {/* Additional CTA */}
      <section className="py-20 bg-blue-600 text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to see these services in action?</h2>
          <p className="mb-8 text-blue-100">Let's craft a custom strategy tailored specifically to your business goals.</p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-colors shadow-lg">
            Request a Free Consultation
          </button>
        </div>
      </section>

      <Testimonials />
    </motion.div>
  );
};

export default Services;
