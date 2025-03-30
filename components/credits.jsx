import React from "react";

const Credits = (props) => {
    return (
        <div data-section id='credits' className='group mt-32'>
            <div className='text-surface-600'>
                <div className="mb-4">
                    This portfolio was crafted with passion by
                    <span className="text-primary-500 font-semibold"> Sayem Molla</span>, a
                    <span className="text-primary-500 font-semibold"> MERN Stack Developer</span> specializing in building scalable web applications.
                    <br /><br />
                    Built using <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500">Next.js</a> and
                    <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500"> Tailwind CSS</a>, this site showcases my experience in <span className="font-semibold text-primary-500">JavaScript, TypeScript, React, Node.js, and MongoDB</span>.
                    <br /><br />
                    You can check out my latest projects on
                    <a href="https://github.com/developersayem" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500"> GitHub</a>,
                    or connect with me on
                    <a href="https://www.linkedin.com/in/sayem-molla/" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500"> LinkedIn</a>.
                </div>
                <div className='flex flex-row justify-between'>
                    <a href="/imprint" rel="noopener noreferrer" className="scroll-auto transition-all hover:text-on-background">Imprint</a>
                    <a href="/privacy" rel="noopener noreferrer" className="scroll-auto transition-all hover:text-on-background">Privacy Statement</a>
                    <span>{props.data.name} | 2025</span>
                </div>
            </div>
        </div>
    )
}

export default Credits