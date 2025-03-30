import React from "react";
import SkillsItem from "./skills-item";

const Skills = (props) => {
    return (
        <div data-section id='skills' className='mb-16'>
            <h2 className='mb-8 visible lg:invisible font-medium tracking-widest space-x-2'>Skills</h2>
            <div className="grid grid-cols-2 gap-2">
                {props.data.map(function (object, index) {
                    return <SkillsItem
                        key={`${object.position}+${object.startDate}`}
                        name={object.name}
                    />
                })}
            </div>
        </div>
    )
}

export default Skills