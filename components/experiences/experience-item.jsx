import React from "react";
import Image from "next/image";

function ExperienceItem(props) {
    return (
        <div className="group flex flex-row mb-4 p-5 transition-all ">
            <div className="w-[100px] h-[60px] flex items-center justify-center mr-4 bg-white">
                <Image
                    src={props.logo}
                    alt="Company Logo"
                    width={100}
                    height={60}
                    className='object-contain bg-transparent'
                />
            </div>
            <div className='flex-1'>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='font-medium transition-all'>
                    {props.title} | {props.company}
                </a>
                <div className='mb-2 text-surface-600'>{props.startDate} - {props.endDate}</div>
                <div className='text-surface-600 mb-4'>{props.description}</div>
                <div className='flex flex-row flex-wrap'>
                    {props.skills ? props.skills.map((skill) => (
                        <div key={skill} className='bg-surface-400 py-1 px-3 rounded-full text-xs mr-2 mb-1'>
                            {skill}
                        </div>
                    )) : ""}
                </div>
            </div>
        </div>
    );
}

export default ExperienceItem;
