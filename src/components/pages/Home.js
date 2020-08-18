import React from "react";
import HogwartsLogo from "../../assets/pictures/hogwarts.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div className="home-container text">
      <motion.div
        className="headline heading"
        drag
        // dragConstraints={{ top: 20, left: 400, right: 400, bottom: 600 }}
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      >
        Home
      </motion.div>
      <motion.div>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{
            scale: 1.25,
          }}
          className="hogwarts-logo"
          src={HogwartsLogo}
          alt="Hogwarts"
        />
      </motion.div>
      <p className="intro">
        Hogwarts School of Witchcraft and Wizardry was the British wizarding
        school, located in the Scottish Highlands.It accepted magical students
        from Great Britain and Ireland for enrolment. It was a state-owned
        school, funded by the Ministry of Magic.{" "}
      </p>
      <p className="location">It is located in Great Britain, Scotland</p>
      <p className="moto">
        Their moto is the following - <br /> Draco Dormiens Nunquam Titillandus
        (Never Tickle a Sleeping Dragon)
      </p>
      <div>Houses are Gryffindor, Hufflepuff, Ravenclaw & Slytherin</div>
    </motion.div>
  );
};

export default Home;
