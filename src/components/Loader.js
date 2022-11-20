import React from "react";
import { motion } from "framer-motion";
import { useCycle } from "framer-motion";
const load = {
  animateOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animateTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animateOne", "animateTwo");
  return (
    <>
      <motion.div
        className="loader"
        variants={load}
        animate={animation}
      ></motion.div>
      <div onClick={() => cycleAnimation()}>cycle loader</div>
    </>
  );
};
export default Loader;
