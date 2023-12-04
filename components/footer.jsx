import React from "react";
import Link from "next/link";
import Image from "next/image";
import HoverLink from "./hoverLink";

const Footer = () => {
  return (
    <footer className="bg-tcp2">
      <div className="container mx-auto py-4 lg:py-8 md:px-0 px-10">
        <div className="lg:flex item-center lg:justify-start lg:flex-row">
          <div className="mb-4 lg:mb-0 basis-1/3 flex flex-row">
            <ul className="flex flex-col justify-center">
              <li className="">
                <p className="text-lg text-white font-bold">Contact</p>
              </li>
              <li className="">
                <p className="text-base text-white">Jl. Kebon Sirih No. 456</p>
              </li>
              <li className="">
                <p className="text-base text-white">
                  Jakarta Pusat, DKI Jakarta 12345
                </p>
              </li>
              <li className="">
                <p className="text-base text-white">Indonesia</p>
              </li>
              <li className="">
                <p className="text-base text-white">(123) 456-7890</p>
              </li>
              <li className="">
                <p className="text-base text-white">info@example.com</p>
              </li>
            </ul>
          </div>
          <div className="mb-4 lg:mb-0 basis-auto flex flex-row">
            <ul className="flex flex-col justify-center">
              <HoverLink>
                <li className="mb-2">
                  <Link href="" className="text-lg font-bold text-white">
                    Home
                  </Link>
                </li>
              </HoverLink>
              <HoverLink>
                <li className="mb-2">
                  <Link href="" className="text-lg font-bold text-white">
                    Information
                  </Link>
                </li>
              </HoverLink>
              <HoverLink>
                <li className="mb-2">
                  <Link href="" className="text-lg font-bold text-white">
                    Profile
                  </Link>
                </li>
              </HoverLink>
              <HoverLink>
                <li className="">
                  <Link href="" className="text-lg font-bold text-white">
                    Data
                  </Link>
                </li>
              </HoverLink>
            </ul>
          </div>
          <div className="mb-4 lg:mb-0 basis-full flex flex-row justify-start md:justify-end">
            <ul className="flex flex-col justify-center">
              <li className="">
                <p className="text-base text-white text-end">
                  © 2023 Your Company. All rights reserved.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
