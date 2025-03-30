"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useTheme } from "next-themes";
import { MagicCard } from "../magicui/magic-card";
import Image from "next/image";
import { Lens } from "../magicui/lens";
import { Star } from "lucide-react";
import Link from "next/link";

function ProjectItem(props) {
    const { theme } = useTheme();
    return (
        <Link href={props.href} target="_blank" rel="noopener noreferrer">
            <Card className="capitalize">
                <MagicCard gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
                    <CardHeader className="p-3">
                        <CardTitle className="flex justify-between items-center">{props.name} <span className="flex justify-start items-center gap-1 text-[#D9D9D955]"><Star size={15} />{props.stars}</span></CardTitle>
                        <CardDescription>
                            {props.framework}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="w-full h-full p-3">
                        <Lens
                            zoomFactor={2}
                            lensSize={100}
                            isStatic={false}
                            ariaLabel="Zoom Area"
                        >
                            <Image src={props.logo} alt="Project Logo" width={1000} height={1000} className='object-contain object-top pt-2' />
                        </Lens>
                        <span className="pt-2"> {props.description}</span>
                    </CardContent>
                    <CardFooter className="p-3 grid grid-cols-3">
                        {props.skills ? props.skills.map((skill) => (
                            <div key={skill} className='bg-surface-400 px-2 rounded-full text-[8px] md:text-xs mr-2 mb-1'>
                                {skill.name}
                            </div>
                        )) : ""}
                    </CardFooter>
                </MagicCard>
            </Card>
        </Link>
    )
}

export default ProjectItem