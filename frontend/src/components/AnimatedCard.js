import React from "react";
import { motion } from "framer-motion";

const AnimatedCard = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md rounded-lg p-4"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
