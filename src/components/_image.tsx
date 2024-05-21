import React from "react";
import Image from "next/image";
interface Props {
  src: string;
  alt: string;
}

export default function ImageCuston({ src, alt }: Props) {
  return (
    <>
      <Image src={src} alt={alt} width={50} height={50} />
    </>
  );
}
