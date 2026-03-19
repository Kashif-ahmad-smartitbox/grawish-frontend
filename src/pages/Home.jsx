import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import ServicesGrid from '../components/sections/ServicesGrid';
import Stats from '../components/sections/Stats';
import Expertise from '../components/sections/Expertise';
import Testimonials from '../components/sections/Testimonials';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Stats />
      <Expertise />
      <ServicesGrid />
      <Testimonials />
    </motion.div>
  );
};

export default Home;
