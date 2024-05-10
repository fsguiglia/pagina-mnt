"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Tutoriales = () => {

const slides = [{id: '1', value: 'https://www.youtube.com/embed/RG2L3Brwtmg?disablekb=1&fs=0&modestbranding=0&rel=0&showinfo=0&autohide=1', title: "Introducción"},
                {id: '2', value: 'https://www.youtube.com/embed/faBa_xU5ugc?disablekb=1&fs=0&modestbranding=0&rel=0&showinfo=0&autohide=1', title: "Interpolate"},
                {id: '3', value: 'https://www.youtube.com/embed/9miOV38_144?disablekb=1&fs=0&modestbranding=0&rel=0&showinfo=0&autohide=1', title: "Trigger y draw"},
                {id: '4', value: 'https://www.youtube.com/embed/TaM2GQT09L4?disablekb=1&fs=0&modestbranding=0&rel=0&showinfo=0&autohide=1', title: "Concatenate"},
                {id: '5', value: 'https://www.youtube.com/embed/8Cd7YEnIqqg?disablekb=1&fs=0&modestbranding=0&rel=0&showinfo=0&autohide=1', title: "Gesture y noise"},
                {id: '5', value: 'https://www.youtube.com/embed/frj0g08KSOU?disablekb=1&fs=0&modestbranding=0&rel=0&showinfo=0&autohide=1', title: "Análisis y transformación de los mapas"}];
  return (
    <div>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        dynamicHeight={false}
        showStatus={false}
        showIndicators={false}
        autoPlay={false}
      >
        {slides.map((item) => (
            <div key={item.id}>
                <div key={item.id}>
                    <p className="text-sm text-left ml-10" key={item.id}>{item.id} de {slides.length} - {item.title}</p>
                </div>
                <div className="aspect-video videoWrapper">
                    <iframe key={item.id} width="560" height="315" src={item.value} title="YouTube video player" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"></iframe>
                </div>
            </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Tutoriales;
