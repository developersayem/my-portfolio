'use client'

import React, { useState, useEffect, useRef } from "react";
import NavItem from "./nav-item";
import { motion } from 'framer-motion';


const Navigation = () => {
    const [activeSection, setActiveSection] = useState(null);
    const observer = useRef(null);

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
            if (visibleSection) {
                setActiveSection(visibleSection.id);
            }
        }, { threshold: 0.5 });

        const sections = document.querySelectorAll('[data-section]');

        sections.forEach((section) => {
            observer.current.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.current.unobserve(section);
            });
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >

            <div id='navigation' className='flex flex-col md:py-10 font-medium tracking-widest'>
                <NavItem active={activeSection === 'about' ? true : false} href='#about' num='01' name="ABOUT"></NavItem>
                <NavItem active={activeSection === 'experiences' ? true : false} href='#experiences' num='02' name="EXPERIENCES"></NavItem>
                <NavItem active={activeSection === 'education' ? true : false} href='#education' num='03' name="EDUCATION"></NavItem>
                <NavItem active={activeSection === 'skills' ? true : false} href='#skills' num='04' name="SKILLS"></NavItem>
                <NavItem active={(activeSection === 'projects') || (activeSection === 'credits') ? true : false} href='#projects' num='05' name="PROJECTS"></NavItem>
            </div>
        </motion.div>
    )
}

export default Navigation