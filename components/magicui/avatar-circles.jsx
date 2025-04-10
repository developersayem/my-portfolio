/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // Import motion from Framer Motion

export const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls
}) => {
  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.1, // Delay based on index
        duration: 0.3,
      },
    }),
  };

  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <motion.a
          key={index}
          href={url.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          variants={avatarVariants} // Add variants
          initial="hidden" // Initial state
          animate="visible" // Animate to visible state
          custom={index} // Pass index to control delay
        >
          <img
            className="h-16 w-16 rounded-full border-2 border-white dark:border-gray-800"
            src={url.imageUrl}
            width={40}
            height={40}
            alt={`Avatar ${index + 1}`}
          />
        </motion.a>
      ))}
      {(numPeople ?? 0) > 0 && (
        <a
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
          href=""
        >
          +{numPeople}
        </a>
      )}
    </div>
  );
};
