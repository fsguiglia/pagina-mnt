"use client";

import React, {useEffect} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";

export function EmblaCarousel() {  
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: false});
    
    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
            }
        }, [emblaApi]);

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <Image src="/1.png" alt="" width="100" height="100" />
                </div>
                <div className="embla__slide">Slide 2</div>
                <div className="embla__slide">Slide 3</div>
            </div>
        </div>
    );
}