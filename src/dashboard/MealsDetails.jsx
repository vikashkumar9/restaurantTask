import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

import cake1 from "../../src/assets/images/cake.png";
import cake2 from "../../src/assets/images/cake.png";
import cake3 from "../../src/assets/images/cake.png";

import back from "../../src/assets/icons/back.png";
import star from "../../src/assets/icons/starIcon.png";
import clock from "../../src/assets/icons/clock.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [cake1, cake2, cake3];

const MealsDetails = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 450,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative min-h-screen bg-white  overflow-hidden">
      <button
        onClick={() => navigate("/dashboard")}
        className="absolute top-4 left-4 z-50 flex justify-center items-center w-[41px] h-[41px] "
      >
        <img src={back} alt="back" className="w-[18px] h-[18px]" />
      </button>
      <div className="relative z-10 overflow-hidden">
        <Slider {...settings}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="cake"
              className="h-[508px] md:h-[100vh] w-full object-cover"
            />
          ))}
        </Slider>
      </div>
      <div className="relative z-30 -mt-14 rounded-t-[25px] bg-white px-8 pt-6 pb-10 ">
        {/* Title & Rating */}
        <div className="flex justify-between items-center">
          <h1 className="font-urbanist text-[18px]  tracking-normal align-middle text-[#1E232C] font-bold">
            Lazy Bear
          </h1>

          <div className="flex items-center gap-[6px]">
            <img src={star} alt="rating" className="w-[15.75px] h-[15.75px]" />
            <span className="text-[#595959] font-medium text-[14px] w-[17px] leading-[13.74px]">
              4.5
            </span>
          </div>
        </div>
        <p className="text-sm text-[#505259] font-medium text-[16px]">
          Connaught Place, New Delhi
        </p>
        <div className="mt-2">
          <span className="text-[#D39171] inline-flex gap-1 font-urbanist font-semibold text-[12px]">
            <img src={clock} alt="clock" className="w-[15px] h-[15px]" />4
            Offers Trending
          </span>
        </div>
        <p className="mt-4 text-[#515151] font-urbanist font-medium text-[14px] leading-[1.2] tracking-normal align-middle">
          Our delicate vanilla cake swirled with chocolate and filled with mocha
          chocolate chip cream and a layer of dark chocolate ganache.
        </p>
      </div>
    </div>
  );
};

export default MealsDetails;
