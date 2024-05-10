"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const Slider = () => {
const slides = [{id: '1', value: 'https://di2546syqxmrb.cloudfront.net/1.png'},
                {id: '2', value: 'https://di2546syqxmrb.cloudfront.net/2.png'},
                {id: '3', value: 'https://di2546syqxmrb.cloudfront.net/3.png'},
                {id: '4', value: 'https://di2546syqxmrb.cloudfront.net/4.png'},
                {id: '5', value: 'https://di2546syqxmrb.cloudfront.net/5.png'}];
  return (
    <div>
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        dynamicHeight={false}
        showStatus={false}
        showIndicators={false}
        autoPlay={true}
        showThumbs={false}
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
