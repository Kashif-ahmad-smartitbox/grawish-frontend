import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { contactInfo } from '../data/dummyData';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully (Dummy Action).");
    e.target.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-slate-50"
    >
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-pink-900/50 to-purple-900/50 z-0"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center mt-10">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 text-center mt-12"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-pink-200 text-center max-w-2xl mx-auto"
          >
            We'd love to hear from you. Reach out to discuss your next big project.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Get In Touch</h2>
              <p className="text-slate-600 mb-10 text-lg">
                Have a question about our services or ready to start a project? Fill out the form or use the contact details below. Our team is ready to assist you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-7 h-7 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Office Address</h4>
                    <p className="text-slate-600 leading-relaxed">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Phone Number</h4>
                    <p className="text-slate-600">{contactInfo.phone1}</p>
                    <p className="text-slate-600">{contactInfo.phone2}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-7 h-7 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Email Address</h4>
                    <p className="text-slate-600">{contactInfo.email}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all" placeholder="How can we help?" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Your Message</label>
                  <textarea required rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all resize-none" placeholder="Write your message here..."></textarea>
                </div>

                <button type="submit" className="w-full bg-linear-to-r from-purple-600 to-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
