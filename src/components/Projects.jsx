import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        name: "E-Commerce Platform",
        description:
            "A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment processing.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
        source_code_link: "https://github.com/yourusername/ecommerce",
        live_demo_link: "#",
    },
    {
        name: "Task Management App",
        description:
            "A task management application that allows users to create, organize, and track their tasks with features like due dates, priorities, and categories.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
        source_code_link: "https://github.com/yourusername/task-manager",
        live_demo_link: "#",
    },
    {
        name: "Weather Dashboard",
        description:
            "A weather dashboard that displays current weather conditions and forecasts for multiple locations using data from a weather API.",
        tags: [
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
            {
                name: "api",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80",
        source_code_link: "https://github.com/yourusername/weather-app",
        live_demo_link: "#",
    },
];

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
        >
            <div className="relative w-full h-[230px]">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover rounded-2xl"
                />

                <div className="absolute inset-0 flex justify-end m-3 gap-2">
                    <div
                        onClick={() => window.open(source_code_link, "_blank")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black bg-opacity-50 hover:bg-opacity-70"
                    >
                        <FaGithub className="w-1/2 h-1/2 text-white" />
                    </div>
                    {live_demo_link && (
                        <div
                            onClick={() => window.open(live_demo_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black bg-opacity-50 hover:bg-opacity-70"
                        >
                            <FaExternalLinkAlt className="w-1/2 h-1/2 text-white" />
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">{name}</h3>
                <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <p
                        key={`${name}-${tag.name}`}
                        className={`text-[14px] ${tag.color}`}
                    >
                        #{tag.name}
                    </p>
                ))}
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="section-wrapper">
            <div data-aos="fade-up">
                <p className="section-subheading">My work</p>
                <h2 className="section-heading">Projects</h2>
            </div>

            <div className="w-full flex">
                <p
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    The following projects showcase my skills and experience through real-world examples of my work.
                    Each project is briefly described with links to code repositories and live demos.
                    These projects reflect my ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7 justify-center">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
