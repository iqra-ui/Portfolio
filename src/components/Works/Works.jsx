import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome" >
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
          Quite Good at all of these


          </span>
          <span>Skills/Expertise</span>
          <spane>
           I bring a diverse skill set and extensive knowledge in front-end and back-end
           <br />
            technologies. With a keen eye for design and user experience, 
            <br />
            I craft visually appealing and intuitive websites. 
            <br />
            My expertise lies in creating responsive, high-performing, and secure
            <br />
             web applications to meet the unique needs of clients and users.
            
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/512px-React.svg.png"} alt=""height={100} />
          </div>

          {/* <div className="w-secCircle">
            <img src={"https://creazilla-store.fra1.digitaloceanspaces.com/icons/3256505/file-type-css-icon-md.png"} alt=""height={100} />
          </div> */}
          
          <div className="w-secCircle">
            <img src={"https://creazilla-store.fra1.digitaloceanspaces.com/icons/3257079/file-type-tailwind-icon-md.png"} alt="" height={100} />
          </div>

          
          <div className="w-secCircle">
            <img src={"https://static-00.iconduck.com/assets.00/node-js-icon-1901x2048-mk1e13df.png"} alt="" height={100} />
          </div>
          <div className="w-secCircle">
            <img src={"https://cdn-icons-png.flaticon.com/512/732/732212.png"} alt="" height={90} />
          </div>
          <div className="w-secCircle">
            <img src={"https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"} alt="" height={100} />
          </div>

          <div className="w-secCircle">
            <img src={"https://creazilla-store.fra1.digitaloceanspaces.com/icons/3256505/file-type-css-icon-md.png"} alt=""height={100} />
          </div>

        <div className="w-secCircle">
          <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt=""height={100}/>
        </div>
        </motion.div>
       
      </div>
    </div>
  );
};

export default Works;
