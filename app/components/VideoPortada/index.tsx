"use client";
import { useState } from "react";

const VideoPortada = () => {
    const width = useState(window.innerWidth)[0];

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