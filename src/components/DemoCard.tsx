import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt: string;
  color: string;
  text: string;
  index: number;
}

const DemoCard = ({ src, alt, color, text, index }: Props) => {
  return (
    <div
      className={`max-w-36 hover:bg-accent/40 p-3 px-5 ${
        index > 1 ? "hidden sm:block" : ""
      }  min-w-28 rounded-2xl  border `}
    >
      <Image
        className={`rounded-full p-1`}
        src={src}
        width={32}
        height={32}
        alt={alt}
      />
      <p> {text}</p>
    </div>
  );
};

export default DemoCard;
