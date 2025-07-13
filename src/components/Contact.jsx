// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// const passport = require("passport");
// const passportJWT = require("passport-jwt");
// require("dotenv").config();

// const secretEmailTemplate = process.env.EMAIL_TEMPLATES;
// const secretEmailService = process.env.EMAIL_SERVICE;
// const secretApiKey = process.env.API_KEY;
// const myEmail = process.env.MY_EMAIL;

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // setLoading(true);
    // emailjs
    //   .send(
    //     "secretEmailService",
    //     "secretEmailTemplate",
    //     {
    //       from_name: form.name,
    //       to_name: "Ewelina",
    //       form_email: form.email,
    //       to_email: "emaniecka3@gmail.com",
    //       message: form.message,
    //     },
    //     "secretApiKey-gYJ"
    //   )
    //   .then(
    //     () => {
    //       setLoading(false);
    //       alert(
    //         "Thank you for your email. I will get back to you as soon as possible"
    //       );
    //       setForm({
    //         name: "",
    //         email: "",
    //         message: "",
    //       });
    //     },
    //     (error) => {
    //       setLoading(false);
    //       console.log(error);
    //       alert("Something went wrong");
    //     }
    //   );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.heroSubText}>Zostańmy w kontakcie</p>
        <h3 className={styles.heroHeadText}>Kontakt</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Jak masz na imię?
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Twoje imię"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Jaki jest Twój mail?
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Twój email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Co chcesz mi powiedzieć/napisać?
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Twoja wiadomość"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Wyślij"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
