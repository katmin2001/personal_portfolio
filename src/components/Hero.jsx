import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="relative w-full h-screen mx-auto">
            <div className="section-wrapper h-full flex flex-col justify-center items-start">
                <div className="flex flex-col justify-center items-center md:items-start">
                    <div className="flex flex-wrap gap-5">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-full md:w-1/3 flex justify-center md:justify-start"
                        >
                            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-tertiary">
                                <img
                                    src="../../public/IMG_7671.JPG"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="w-full md:w-3/5"
                        >
                            <h1 className="section-heading">
                                Hi, I'm <span className="gradient-text">Kenzy</span>
                            </h1>
                            <p className="section-subheading mt-2">
                                Software Developer
                            </p>
                            <p className="text-secondary mt-4 text-[17px] max-w-3xl">
                                I'm a passionate software developer with expertise in web development,
                                currently studying at [Your University]. I specialize in creating
                                user-friendly applications with modern technologies.
                            </p>

                            <div className="mt-6">
                                <h3 className="text-white text-[20px] font-bold">Career Objective</h3>
                                <p className="text-secondary mt-2 text-[17px] max-w-3xl">
                                    To leverage my technical skills and creativity in developing innovative
                                    solutions that make a positive impact, while continuously learning and
                                    growing as a professional in the tech industry.
                                </p>
                            </div>

                            <div className="mt-6 flex gap-4">
                                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                                    <FaGithub size={30} />
                                </a>
                                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                                    <FaLinkedin size={30} />
                                </a>
                                <a href="mailto:your.email@example.com" className="text-white hover:text-secondary transition-colors">
                                    <FaEnvelope size={30} />
                                </a>
                            </div>

                            <div className="mt-8">
                                <a href="#contact" className="btn">
                                    Contact Me
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#experience">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
