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
          
   
        <a href="https://vaneezay-rhnh.vercel.app/" target="_blank">
          <img  id="pimg" src={"https://img.freepik.com/premium-photo/online-shopping-with-tablet-red-women-s-dress-ecommerce-web-page_176814-1621.jpg"} alt=""  />
          <div class="overlay">
    <div class="textOver">VANEEZAY</div>
  </div>
        
        </a>
        {/* <div className="inner">
           <p>zara</p>
        </div> */}
    </Col>
    <Col className="p1">
     
        <a href="https://zara-ashy.vercel.app/" target="_blank">
          <img id="pimg" src={"https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=926,quality=70,width=1388/https://static.fashionunited.com/202011/Zara_like_1.jpg"} alt=""  />
          <div class="overlay1">
    <div class="textOver">International-ZARA</div>
  </div>
          </a>

   
     </Col>
     </Row>
      </Container>

     
 

    </div>
  );
};

export default Portfolio;
