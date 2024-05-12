'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Sobre mí" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">¡Saludos! Soy Sebastian,</span> un apasionado creador de productos
        y experiencias,me he sumergido en el mundo web, comenzando con HTML y CSS, y he evolucionado hacia el{' '}
        <span className="font-extrabold text-white"> diseño de experiencias completas con UX y UI
        </span>{' '}
        Con una sólida base en marketing digital{' '}
        <span className="font-extrabold text-white">y growth, </span> actualmente desempeño el rol de coordinador de marketing en una empresa, 
        donde contribuyo en diversos proyectos. ¡Conéctate conmigo en{' '}
        <span className="font-extrabold text-white">Linkedin</span>  para explorar más sobre mi trayectoria y colaboraciones!
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
