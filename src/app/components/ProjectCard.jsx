import React from 'react';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({ title, gitUrl }) => {
    return (
        <div className="bg-[#181818] rounded-xl overflow-hidden group">
            {/* Background */}
            <div
                className="h-52 md:h-72 relative group"
                style={{ 
                    backgroundColor: 'white', // Corrected to backgroundColor
                }}
            >
                {/* Overlay that appears on hover */}
                <div className="overlay flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 rounded-t-xl">
                    {/* Link Button */}
                    <Link href={gitUrl} className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white">
                        <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white" />
                    </Link>
                </div>
            </div>
            {/* Project Title always visible outside the hover overlay */}
            <div className="text-white py-6 px-4">
                <h5 className="text-xl font-semibold mb-2 text-center">{title}</h5>
            </div>
        </div>
    );
};

export default ProjectCard;
