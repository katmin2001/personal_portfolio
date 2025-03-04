import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const experiences = [
    {
        title: "Software Developer",
        company_name: "Tech Company",
        icon: <FaBriefcase />,
        iconBg: "#383E56",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Development Intern",
        company_name: "Startup Inc.",
        icon: <FaBriefcase />,
        iconBg: "#E6DEDD",
        date: "Jun 2022 - Dec 2022",
        points: [
            "Assisted in developing user interfaces using HTML, CSS, and JavaScript.",
            "Worked on bug fixing and improving application performance.",
            "Participated in daily stand-up meetings and sprint planning.",
            "Gained experience with version control systems like Git.",
        ],
    },
    {
        title: "Bachelor's Degree in Computer Science",
        company_name: "Your University",
        icon: <FaGraduationCap />,
        iconBg: "#383E56",
        date: "Sep 2019 - Jun 2023",
        points: [
            "Studied core computer science subjects including algorithms, data structures, and software engineering.",
            "Completed several projects in web development, mobile app development, and database management.",
            "Participated in coding competitions and hackathons.",
            "Graduated with honors (if applicable).",
        ],
    },
];

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #1d1836" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg, color: "#fff" }}
            icon={experience.icon}
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
                <p
                    className="text-secondary text-[16px] font-semibold"
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className="text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="section-wrapper">
            <div data-aos="fade-up">
                <p className="section-subheading">What I have done so far</p>
                <h2 className="section-heading">Work Experience & Education</h2>
            </div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    );
};

export default Experience;
