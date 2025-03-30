import React from "react";
import ProjectItem from "./project-item";

const Projects = (props) => {
    return (
        <div data-section id='projects' className='mb-16'>
            <h2 className='mb-8 visible lg:invisible font-medium tracking-widest'>Projects</h2>
            <div className='grid grid-cols-1 md:rid-cols-2 gap-2'>
                {props.data.map(function (object, index) {
                    return <ProjectItem
                        key={object.name}
                        name={object.name}
                        logo={object.logo}
                        stars={object.stars}
                        framework={object.framework}
                        description={object.description}
                        skills={object.skills}
                        href={object.href}
                    />
                })}
            </div>
        </div>
    )
}

export default Projects