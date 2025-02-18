// import Categories from "./components/categories";
// import Destinations from "./components/home/destinations";
"use client"

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Header from "./components/header";
import Features from "./components/home/features";
import MoreFeatures from "./components/more_features";
import Newsletter from "./components/newsletter";
import Reviews from "./components/reviews";
import Services from "./services/page";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return (
    <div className="">
      <motion.div initial="initial" animate="animate" variants={fadeInUp}>
        <Header />
      </motion.div>
      <motion.div
        ref={ref}
        initial="initial"
        animate={controls}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <Features />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Services />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MoreFeatures />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Reviews />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Newsletter />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;