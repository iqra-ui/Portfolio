import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './Iqra Noor (CV).pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome" id="awesome" >
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Professional</span>
        <span>Experience</span>
        <spane>
        The energetic and motivated experienced has developing original
        <br />
          code, working on user-friendly interfaces, designing, enhancing,
         <br />
          correcting bugs, and maintaining apps with the development team. 
          <br />
          They have also learned new skills and gained experience 
          <br />
          in a work environment that is professional.

        

        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={"https://img.freepik.com/free-vector/happy-women-learning-language-online-isolated-flat-vector-illustration-cartoon-female-characters-taking-individual-lessons-through-messenger-education-digital-technology-concept_74855-10088.jpg"}
            heading={"Web developer-Intern"}
            detail={"Motivated web developer has knowledge and expertise from working in a professional environment and develop the highly skilled in responsive user interfaces, creating, and executing cutting-edge online applications with the development team."}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={"./image/ecom.png"}
            heading={"Ecommerce Developer"}
            detail={"Discover a seamless shopping experience at our professional eCommerce website. Explore a vast selection of high-quality products and enjoy convenient, secure, and fast checkout options"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={"https://cdn-icons-png.flaticon.com/512/2351/2351891.png"}
            heading={"Javascript"}
            detail={"Build the multiple javascript projects with advanced functionality and features "}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
