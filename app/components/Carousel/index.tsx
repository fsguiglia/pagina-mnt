"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const Slider = () => {
const slides = [{id: '1', value: '/1.png'},
                {id: '2', value: '/2.png'},
                {id: '3', value: '/3.png'},
                {id: '4', value: '/4.png'},
                {id: '5', value: '/5.png'}];
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
            <div key={item.id}>
                <Image key={item.id} src={item.value} width="1366" height="738" alt="MNT" />
            </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
