import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import { Col,Container, Row } from "react-bootstrap";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  
  return (

    <div className="portfolio" id="portfolio" >
    
      {/* heading */}
      <span className="recent" style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span className="port">Portfolio</span>

      {/* slider */}
      {/* <Swiper
        spaceBetween={30}
        slidesPerView={2}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://vaneezay-rhnh.vercel.app/"><img src={"../../image/project1.png"} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../../image/project2.png"} alt="" />
        </SwiperSlide>
        
      </Swiper> */}
       <Container  className=" projects">
        <Row>
          <Col className="p">
          
   
        <a href="https://vaneezay-rhnh.vercel.app/" target="_blank"><img src={"../../image/project1.png"} alt=""  /></a>
   
    </Col>
    <Col className="p">
     
        <a href="https://zara-ashy.vercel.app/" target="_blank"><img src={"../../image/project2.png"} alt=""  /></a>
   
     </Col>
     </Row>
      </Container>

     
 

    </div>
  );
};

export default Portfolio;
