"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Props {
  path: string
}

const Logo = (props : Props) => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  return (
    <>
      <Link href={props.path == "/" ? "#portada" : "/"} style={{display: "block"}}>
        <Image
          src="/mnt.svg"
          alt="Logo"
          width="0"
          height="0"
          priority={true}
          className={"relative w-[50px] h-auto float-left"}
        />
      </Link>
    </>
  );
};

export default Logo;