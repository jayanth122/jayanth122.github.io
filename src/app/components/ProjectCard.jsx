import React from 'react';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({ title, gitUrl }) => {
    return (
        <div className="bg-[#181818] rounded-xl overflow-hidden group">
            {/* Background */}
            <div className="h-52 md:h-72 relative group" style={{ backgroundColor: "#F9E8C9",}}>
                {/* Overlay that appears on hover */}
                <div className="overlay flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full 
                bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 rounded-t-xl">
                </div>
                {/* Project title */}
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                    <h5 className="text-xl font-semibold text-center text-black">{title}</h5>
                    {/* Code Bracket icon inside a circle, initially hidden, shown on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link href={gitUrl} className="h-14 w-14 flex items-center justify-center border-2 rounded-full border-[#ADB7BE] hover:border-white">
                            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] hover:text-white" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProjectCard;
