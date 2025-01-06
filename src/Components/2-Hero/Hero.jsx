import "./Hero.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Swiper.css";
import "swiper/css/autoplay";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import PropTypes from "prop-types";

import { Box } from "@mui/material";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";

import img2 from "../../imgs/img2.jpg";
import img3 from "../../imgs/img3.jpg";
import img4 from "../../imgs/img4.jpg";
import img6 from "../../imgs/img6.jpg";

const sliderData = [{ img: img2 }, { img: img3 }, { img: img4 }, { img: img6 }];
export default function Hero({ href }) {
  return (
    <Box className="hero ">
      <Box>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={1} // Set this to 1 for one slide at a time
          spaceBetween={30} // Adds spacing between slides
          autoplay={{
            delay: 5000, // 5 seconds delay
            disableOnInteraction: false, // keep autoplay even when user interacts
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          className="mySwiper">
          {sliderData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img style={{ width: "100%" }} src={item.img} alt="banner" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
      <a href={href} className="go-down">
        <KeyboardDoubleArrowDownOutlinedIcon
          fontSize="large"
          className="icon"
        />
      </a>
    </Box>
  );
}
// Add prop validation
Hero.propTypes = {
  href: PropTypes.string.isRequired, // Ensures 'href' is a required string
  children: PropTypes.node,
};
