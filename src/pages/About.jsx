import { motion } from 'framer-motion';
import Stats from '../components/sections/Stats';
import Expertise from '../components/sections/Expertise';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-purple-900/50 to-blue-900/50 z-0"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10text-center mt-10">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 text-center mt-12"
          >
            About Grawish
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-200 text-center max-w-2xl mx-auto"
          >
            We are a team of passionate digital experts dedicated to driving revenue and growth for businesses worldwide.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission is to Empower Your Brand</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                At Grawish, our mission is simple: to help businesses of all sizes establish a powerful digital footprint. We leverage data-driven strategies, cutting-edge design, and innovative technology to ensure you stay ahead of the curve.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Whether you're looking to redefine your brand identity, scale your e-commerce platform, or dominate search engine rankings, our multifaceted team brings the exact expertise you need to succeed.
              </p>
            </motion.div>
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" 
                alt="Business Discussion" 
                className="rounded-3xl shadow-xl w-full h-auto object-cover aspect-video"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Stats />
      <Expertise />
    </motion.div>
  );
};

export default About;
