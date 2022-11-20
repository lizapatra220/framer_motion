import React from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const hoverVariant = {
  // visible: {
  //   x: [0, -20, 20, -20, 20, 0],
  //   transition: {
  //     delay: 2,
  //   },
  // },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.4,
      yoyo: Infinity,
    },
  },
};
const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      delay: 1.5,
      duration: 1.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button
          variants={hoverVariant}
          // animate="visible"
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;

// animate={{ marginTop: 200, opacity: 0.2, rotateZ: 180 }}
// fontSize: 70, color: "#ff2994", x: 100, y: -100
// scale: 1.7
