"use client";
import { useEffect } from "react";

const VideoPortada = () => {
    let width = undefined;
    useEffect(()=>{
        width = window.innerWidth;
    });
    if(typeof width == 'undefined')
        width = 1399
    
    return width ? (
            <video autoPlay muted loop>
                <source src={
                    width >= 1400 ?
                    "https://di2546syqxmrb.cloudfront.net/MNT2-720.mp4"
                    : width > 720 ?
                    "https://di2546syqxmrb.cloudfront.net/MNT2-360.mp4"
                    : "https://di2546syqxmrb.cloudfront.net/MNT2-180.mp4"
                 } />
            </video>
    ) : (
        <div>loading...</div>
    );
}

export default VideoPortada;