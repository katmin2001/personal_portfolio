import React from 'react';
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-tertiary text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold">Your Name</h2>
                        <p className="text-secondary mt-2">Software Developer</p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/katmin2001" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://https://www.facebook.com/kenzy.mine/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                            <FaFacebook size={24} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-700 pt-8 text-center">
                    <p className="text-secondary">
                        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
