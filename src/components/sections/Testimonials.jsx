import { motion } from 'framer-motion';
import { testimonialsData } from '../../data/dummyData';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-purple-600 font-bold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              What Our Clients Say
            </h3>
            <p className="text-lg text-slate-600">
              Hear directly from the brands and businesses we have partnered with to achieve their growth objectives.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 relative hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100 rotate-180" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-slate-100 text-slate-100'}`} 
                  />
                ))}
              </div>
              
              <p className="text-slate-600 mb-8 italic leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-purple-100"
                />
                <div>
                  <h5 className="font-bold text-slate-900">{testimonial.name}</h5>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
