"use client";

import React from 'react'
import Image from "next/image";

const Image_display = () => {
  return (
    <>
      <Image
      src="/example_1.jpg"
      alt=""
      className="object-cover h-full w-full"
      width={700}
      height={500}
      />
    </>
  )
}

export default Image_display