import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageWrapper from "./pageWrapper";
import HoverLink from "./hoverLink";

const Card_carousel_1 = () => {
  return (
    <>
      <PageWrapper>
        <Image
          src="/example_1.jpg"
          alt=""
          className="object-cover w-full"
          width={500}
          height={500}
        />
        <div className="mt-4 lg:mt-8">
          <p className="mb-2 lg:mb-4 text-right font-semibold text-xl text-primary">
            Jorem ipsum dolor sit amet
          </p>
          <p className="mb-2 lg:mb-4 text-right text-primary">
            Lorem ipsum dolor sit amet consectetur. Purus in quam scelerisque
            felis. Ultricies et tempus hendrerit aliquet non eget. Nulla vitae
            vivamus
          </p>

          <HoverLink>
            <Link href="" className="font-semibold text-primary">
              Learn More
            </Link>
          </HoverLink>
        </div>
      </PageWrapper>
    </>
  );
};

export default Card_carousel_1;
