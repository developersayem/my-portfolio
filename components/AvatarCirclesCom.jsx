"use client";


import { AvatarCircles } from "./magicui/avatar-circles";

const github = "https://github.com/developersayem"

const avatars = [
    {
        imageUrl: "https://i.ibb.co.com/5hvpfFxc/Whats-App-Image-2025-04-11-at-03-12-04.jpg",
        profileUrl: github,
    },
    {
        imageUrl: "https://i.ibb.co.com/yBkGKV8b/Whats-App-Image-2025-04-11-at-03-06-18-1.jpg",
        profileUrl: github,
    },
    {
        imageUrl: "https://i.ibb.co.com/Zz2G9h8w/Whats-App-Image-2025-04-11-at-03-06-19-1.jpg",
        profileUrl: github,
    },
    {
        imageUrl: "https://i.ibb.co.com/JRXTRLs9/Whats-App-Image-2025-04-11-at-03-06-19-2.jpg",
        profileUrl: github,
    },
    // {
    //     imageUrl: "https://i.ibb.co.com/ZRqn871M/Whats-App-Image-2025-04-11-at-03-06-19.jpg",
    //     profileUrl: github,
    // },
    {
        imageUrl: "https://i.ibb.co.com/bRWR6942/sayemmolla.jpg",
        profileUrl: github,
    },
];

function AvatarCirclesCom() {
    return <AvatarCircles numPeople={0} avatarUrls={avatars} />;
}

export default AvatarCirclesCom