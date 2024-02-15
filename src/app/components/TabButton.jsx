import React from "react";
import { motion } from "framer-motion";

// Adjusting the active width to be less and adding a rounded property
const variants = {
  default: { width: 0 },
  // Decrease the target width on active, and you can adjust the subtracted value as needed
  active: { width: "calc(100% - 0.75rem)" }, // Adjusted for less width
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab} className="flex flex-col items-start">
      <p className={`mr-2 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 mt-2 mr-3 rounded-full" // Added rounded-full for fully rounded edges
        style={{ backgroundColor: active ? "#F9E8C9" : "transparent" }}
      ></motion.div>
    </button>
  );
};

export default TabButton;
