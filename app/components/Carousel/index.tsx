"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const Slider = () => {
const slides = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png"]
  return (
    <div>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        dynamicHeight={false}
        showStatus={false}
        showIndicators={false}
        autoPlay={true}
      >
        {slides.map((item) => (
          <div>
            <div>
                <Image src={item} width="1366" height="738" alt="MNT" />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
