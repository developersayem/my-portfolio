"use client";
import React from "react";
import Image from 'next/image';
import { Mail } from "lucide-react";
import { motion } from 'framer-motion';

const Socials = (props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='flex flex-col gap-5 md:flex-row justify-center items-center'>
                <a href={`mailto:${props.data.email}`} className='mr-10 transition-all bg-primary-500 hover:bg-primary-300 text-surface-100 font-bold ml-auto py-2 px-20  md:px-8 rounded flex flex-row justify-center items-center'>
                    <Mail size={20} />
                    <span className='pl-2'>Get in touch</span>
                </a>
                <div className='flex flex-row'>
                    <a href={props.data.github} target="_blank" rel="noopener noreferrer" className="mr-10 flex flex-row content-center justify-center">
                        <Image src="/logos/github-mark-white.png" alt="GitHub Logo" width={20} height={20} className='object-contain object-top mr-2' />
                        <div className=''>GitHub</div>
                    </a>
                    <a href={props.data.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-row content-center justify-center">
                        <Image src="/logos/linkedin-mark-white.png" alt="LinkedIn Logo" width={20} height={20} className='object-contain object-top mr-2' />
                        <div className=''>LinkedIn</div>
                    </a>
                </div>

            </div>
        </motion.div>
    )
}

export default Socials