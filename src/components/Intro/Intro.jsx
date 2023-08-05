import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>  Iqra Noor</span>
          <span>

          Highly skilled React Developer crafting seamless and user-friendly web applications. Proficient in building interactive interfaces using ReactJs. Adept at problem-solving and delivering high-quality projects 
          in collaborative team environments. Passionate about continuous learning and staying up-to-date with the latest trends in frontend development. 
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/iqra-ui"><img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/iqra-noor-041673244/" >
          <img src={LinkedIn} alt="" />
            </a>
          {/* <img src={Instagram} alt="" /> */}
        </div>
      </div>
      {/* right image side */}
      
      <div className="i-right ">
      <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          // viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle1">
          <img className="profile"  src={"./image/3.jpeg"}/>
          </motion.div>
      
       
        {/* <img src={Vector1} alt="" /> */}
        {/* <img className="vector" src={Vector2} alt="" /> */}
       
        {/* <img className="profile" src={"./image/2.png"} height={500} /> */}
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          // src={glassesimoji}
          // alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="React" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
    
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
   
    </div>
  );
};

export default Intro;
