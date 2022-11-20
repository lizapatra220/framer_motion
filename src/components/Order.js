import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
const containerVariant = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};
const childVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza, setshowModal }) => {
  // const [showTitle, setshowTitle] = useState(true);
  // setTimeout(() => {
  //   setshowTitle(false);
  // }, 4000);
  useEffect(() => {
    setTimeout(() => {
      setshowModal(true);
    }, 5000);
  }, [setshowModal]);

  return (
    <motion.div
      className="container order"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      {/* <AnimatePresence>
        {showTitle && (
          <motion.h2 exit={{ y: -1000 }}>Thank you for your order :)</motion.h2>
        )}
      </AnimatePresence> */}
      <h2>Thank you for your order :)</h2>

      <motion.p variants={childVariant}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariant}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
