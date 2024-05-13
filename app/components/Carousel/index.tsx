"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { useEffect } from "react";

const Slider = () => {
  let width = undefined;
    useEffect(()=>{
        width = window.innerWidth;
    });
  if(typeof width == 'undefined')
      width = 1399

  var slides = [{id: '1', value: 'https://d1at6djbu3ggt6.cloudfront.net/image/720/1.png'},
                {id: '2', value: 'https://d1at6djbu3ggt6.cloudfront.net/image/720/2.png'},
                {id: '3', value: 'https://d1at6djbu3ggt6.cloudfront.net/image/720/3.png'},
                {id: '4', value: 'https://d1at6djbu3ggt6.cloudfront.net/image/720/4.png'},
                {id: '5', value: 'https://d1at6djbu3ggt6.cloudfront.net/image/720/5.png'}];
  if(width < 1440)
  {
    slides = [{id: '1', value: 'https://d1at6djbu3ggt6.cloudfront.net/image/360/1.png'},
              {id: '2', value: 'https://d1at6djbu3ggt6.cloudfront.net/image/360/2.png'},
              {id: '3', value: 'https://d1at6djbu3ggt6.cloudfront.net/image/360/3.png'},
              {id: '4', value: 'https://d1at6djbu3ggt6.cloudfront.net/image/360/4.png'},
              {id: '5', value: 'https://d1at6djbu3ggt6.cloudfront.net/image/360/5.png'}];
    if(width <= 720)
    {
      slides = [{id: '1', value: 'https://d1at6djbu3ggt6.cloudfront.net/image/180/1.png'},
                {id: '2', value: 'https://d1at6djbu3ggt6.cloudfront.net/image/180/2.png'},
                {id: '3', value: 'https://d1at6djbu3ggt6.cloudfront.net/image/180/3.png'},
                {id: '4', value: 'https://d1at6djbu3ggt6.cloudfront.net/image/180/4.png'},
                {id: '5', value: 'https://d1at6djbu3ggt6.cloudfront.net/image/180/5.png'}];
    }
  }


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
