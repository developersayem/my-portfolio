import React from "react";
import Navigation from "./navigation";
import Socials from "./socials";
import { BoxReveal } from "./magicui/box-reveal";
import AvatarCirclesCom from "./AvatarCirclesCom";
import Image from "next/image";

const Header = (props) => {
    return (
        <div className='lg:fixed h-[80vh] md:h-screen basis-1.5/4 flex flex-col justify-between pb-20 md:pb-48 self-center lg:self-auto'>
            <div className=''>
                <BoxReveal boxColor={"#7170FE"} duration={0.5}>
                    <h1 className='text-5xl subpixel-antialiased tracking-wide'>{props.data.name}</h1>
                </BoxReveal>
                <BoxReveal boxColor={"#7170FE"} duration={0.5}>
                    <h2 className='text-surface-600 pt-2 text-base font-normal tracking-wider'>{props.data.headline}</h2>
                </BoxReveal>
            </div>
            <AvatarCirclesCom />
            {/* <Image src="/sayemmolla.jpg"
                alt="profile pic"
                width={150}
                height={150}
                loading="lazy"
                className='w-fit h-fit rounded-md' /> */}

            <Navigation></Navigation>
            <Socials data={props.data.socials}></Socials>
        </div>
    )
}

export default Header