"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Tutoriales = () => {

const slides = [{id: '1', value: 'https://www.youtube.com/embed/CD3roWDbJMw?disablekb=1&fs=0&modestbranding=0&rel=0&showinfo=0&autohide=1', title: "Introducción"},
                {id: '2', value: 'https://www.youtube.com/embed/YzhCI3Gezhw?disablekb=1&fs=0&modestbranding=0&rel=0&showinfo=0&autohide=1', title: "Interpolate"},
                {id: '3', value: 'https://www.youtube.com/embed/LN_l9xAEVR0?disablekb=1&fs=0&modestbranding=0&rel=0&showinfo=0&autohide=1', title: "Concatenate"},
                {id: '4', value: 'https://www.youtube.com/embed/Xq6XCtkB1bw?disablekb=1&fs=0&modestbranding=0&rel=0&showinfo=0&autohide=1', title: "Gesture y noise"},
                {id: '5', value: 'https://www.youtube.com/embed/9jpJc6_F2Oc?disablekb=1&fs=0&modestbranding=0&rel=0&showinfo=0&autohide=1', title: "Draw y trigger"}
              ];
  return (
    <div>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        dynamicHeight={false}
        showStatus={false}
        showIndicators={false}
        autoPlay={false}
        showThumbs={false}
      >
        {slides.map((item) => (
            <div key={item.id} className="-z-1">
                <div key={item.id}>
                    <p className="text-sm text-left ml-10" key={item.id}>{item.id} de {slides.length} - {item.title}</p>
                </div>
                <div>
                    <iframe key={item.id} width="640" height="360" src={item.value} title="YouTube video player" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"></iframe>
                </div>
            </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Tutoriales;
