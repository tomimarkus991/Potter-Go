import React, { useContext } from "react";
import HogwartsLogo from "../../assets/pictures/hogwarts.png";
import HogwartsMap from "../../assets/pictures/hogwartsMap.jpg";
import { motion } from "framer";
import PotterContext from "../../contexts/potter/PotterContext";

const Home = () => {
  const { setSelectedImg } = useContext(PotterContext);
  return (
    <div>
      <div>
        <img className="hogwarts-logo" src={HogwartsLogo} alt="Hogwarts" />
      </div>
      <p>
        Hogwarts School of Witchcraft and Wizardry was the British wizarding
        school, located in the Scottish Highlands.It accepted magical students
        from Great Britain and Ireland for enrolment. It was a state-owned
        school, funded by the Ministry of Magic.{" "}
      </p>
      <p>Location: Great Britain, Scotland</p>
      <p>
        Moto: Draco Dormiens Nunquam Titillandus (Never Tickle a Sleeping
        Dragon)
      </p>
      <ul className="list-group-default">
        Houses:
        <li>Gryffindor</li>
        <li>Hufflepuff</li>
        <li>Ravenclaw</li>
        <li>Slytherin</li>
      </ul>
      <motion.div
        layout
        whileHover={{ opacity: 1, scale: 1.4 }}
        whileTap={{
          scale: 0.8,
          borderRadius: "100%",
        }}
      >
        <motion.img
          src={HogwartsMap}
          alt="Hogwarts"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
      </motion.div>
    </div>
  );
};

export default Home;
