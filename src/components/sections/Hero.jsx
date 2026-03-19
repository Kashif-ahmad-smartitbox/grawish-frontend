import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { heroData } from '../../data/dummyData';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-slate-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              {heroData.subtitle}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 capitalize">
              {heroData.title.split(' ')[0]} <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-600">
                {heroData.title.split(' ')[1] || 'Digital'}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed whitespace-pre-line">
              {heroData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-slate-900 text-white rounded-full font-semibold flex items-center justify-center gap-3 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800">
                <span className="relative z-10">{heroData.ctaText}</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group px-8 py-4 bg-white text-slate-800 rounded-full font-semibold flex items-center justify-center gap-3 shadow-lg border border-slate-100 hover:border-slate-300 transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Play className="w-4 h-4 fill-current ml-1" />
                </div>
                <span>{heroData.videoBtnText}</span>
              </button>
            </div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full aspect-square md:aspect-4/3 lg:aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white border-8 border-white">
              {/* Premium absolute placeholder image */}
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Digital Marketing Team" 
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* Floating Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute top-8 -left-8 md:-left-12 bg-white p-4 rounded-2xl shadow-xl hidden md:flex items-center gap-4 border border-slate-100"
              >
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-xl">
                  ✓
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Success Rate</p>
                  <p className="text-xl font-bold text-slate-800">99.8%</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
