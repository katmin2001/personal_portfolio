import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // This is a placeholder for form submission
        // In a real application, you would send this data to a server
        setTimeout(() => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
            setForm({
                name: "",
                email: "",
                message: "",
            });
        }, 1000);
    };

    return (
        <section id="contact" className="section-wrapper">
            <div data-aos="fade-up">
                <p className="section-subheading">Get in touch</p>
                <h2 className="section-heading">Contact</h2>
            </div>

            <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-[0.75] bg-tertiary p-8 rounded-2xl"
                    data-aos="fade-right"
                >
                    <p className="section-subheading">Get in Touch</p>
                    <h3 className="text-white font-bold text-[24px]">Contact Me</h3>

                    <div className="mt-6 flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-2xl text-white" />
                            <p className="text-white-100 text-[16px]">your.email@example.com</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaPhone className="text-2xl text-white" />
                            <p className="text-white-100 text-[16px]">+1 (123) 456-7890</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaMapMarkerAlt className="text-2xl text-white" />
                            <p className="text-white-100 text-[16px]">Your City, Country</p>
                        </div>
                    </div>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-12 flex flex-col gap-8"
                    >
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Your Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's your name?"
                                className="bg-black-200 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                                required
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Your Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's your email?"
                                className="bg-black-200 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                                required
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Your Message</span>
                            <textarea
                                rows={7}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What do you want to say?"
                                className="bg-black-200 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
                                required
                            />
                        </label>

                        <button
                            type="submit"
                            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-black-200"
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </form>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
                    data-aos="fade-left"
                >
                    <div className="h-full bg-tertiary rounded-2xl overflow-hidden flex items-center justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                            alt="contact"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
