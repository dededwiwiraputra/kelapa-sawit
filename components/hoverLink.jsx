"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const HoverLink = ({ children }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          whileHover={{ scale: 1.1 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default HoverLink;
