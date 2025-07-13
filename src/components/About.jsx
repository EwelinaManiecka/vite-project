// eslint-disable-next-line no-unused-vars
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion.js";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Skrót</p>
        <h2 className={styles.sectionHeadText}>O mnie</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Jestem pedagogiem z wieloletnim stażem pracy, obecnie w trakcie studiów z psychologii. 
        Ponadto jestem redaktorem. Z moim zespołem z sukcesem zakończyliśmy projekt edukacyjny.
        Prowadziłam ten zespół przez 4 lata, byłam odpowiedzialna za treści, ale też za moich współpracowników.
        W trakcie pracy redaktorskiej pomyślałam, że chcę być programistą. 
        Szybko rozwijające się biblioteki do języków programowania mnie pokonały. 
        Jednak wiedza zdobyta pozwala mi na robienie drobnych projektów, 
        czy poprawianie czegoś dla siebie. 
        W trakcie pracy z kodem, okazało się, 
        że Szef potrzebuje także kogoś do pisania artykułów i tworzenia info-grafik. 
        Tak oto przeszłam na stanowisko specjalisty ds. social mediów.
        Wróciłam do nauczania.
        Moje doświadczenie życiowe i zawodowe jest o wiele bogatsze niż może wskazywać na to ta strona.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
