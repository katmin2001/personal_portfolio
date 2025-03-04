import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaUsers } from 'react-icons/fa';

const awards = [
    {
        title: "First Place Hackathon",
        description: "Won first place in the University Hackathon for developing an innovative solution to [specific problem].",
        icon: <FaTrophy className="text-yellow-500 text-4xl" />,
    },
    {
        title: "Dean's List",
        description: "Recognized for academic excellence by being on the Dean's List for consecutive semesters.",
        icon: <FaMedal className="text-blue-500 text-4xl" />,
    },
    {
        title: "Web Development Certification",
        description: "Completed advanced certification in Full Stack Web Development from [Institution].",
        icon: <FaCertificate className="text-green-500 text-4xl" />,
    },
    {
        title: "Volunteer Work",
        description: "Contributed 100+ hours to teaching coding to underprivileged students through [Organization].",
        icon: <FaUsers className="text-purple-500 text-4xl" />,
    },
];

const AwardCard = ({ index, title, description, icon }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
        >
            <div className="w-full flex justify-center items-center mb-4">
                {icon}
            </div>

            <h3 className="text-white text-[20px] font-bold text-center">
                {title}
            </h3>
            <p className="mt-2 text-secondary text-[14px] text-center">
                {description}
            </p>
        </motion.div>
    );
};

const Awards = () => {
    return (
        <section id="awards" className="section-wrapper">
            <div data-aos="fade-up">
                <p className="section-subheading">My Achievements</p>
                <h2 className="section-heading">Awards & Activities</h2>
            </div>

            <div className="mt-20 flex flex-wrap gap-7 justify-center">
                {awards.map((award, index) => (
                    <AwardCard
                        key={`award-${index}`}
                        index={index}
                        {...award}
                    />
                ))}
            </div>
        </section>
    );
};

export default Awards;
