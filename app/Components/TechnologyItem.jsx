import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function TechnologyItem({ src, alt }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ 
        duration: 0.2,
        type: "spring",
        stiffness: 260,
        damping: 20 
      }}
      className="h-[80px] w-[80px] bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md"
    >
      <Image 
        src={src} 
        alt={alt || "Technology icon"} 
        height={40} 
        width={40}
        className="object-contain"
      />
    </motion.div>
  );
}

export default TechnologyItem;
