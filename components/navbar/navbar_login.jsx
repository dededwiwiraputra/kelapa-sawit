"use client";

import React, { useState } from 'react'
import Link from "next/link";
import { Menu, X } from "lucide-react";
import HoverLink from '../hoverLink';

const Navbar_Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    console.log("toggleNavbar");
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-tcp2 shadow-sm ">
        <div className="container mx-auto">
          <div className="top-0 flex w-full justify-between py-4 lg:py-8 z-[999] px-10 md:px-0">
            <div className="md:basis-1/2">
              <Link href="/">
                <p className="text-base md:text-xl font-bold text-white">
                  Sistem Deteksi Hama Ganoderma
                </p>
                <p className='text-white font-semi pl-custom'>
                  (SistekHaGano)
                </p>
              </Link>
            </div>
            <div className="hidden lg:flex basis-1/2 justify-end">
              <ul className="flex mt-3">
                <HoverLink>
                  <li className="me-8">
                    <Link
                      href="#profil"
                      className="font-semibold text-lg text-white link-hover"
                    >
                      Profil
                    </Link>
                  </li>
                </HoverLink>
                <HoverLink>
                  <li className="mx-8">
                    <Link
                      href="#klasifikasi"
                      className="font-semibold text-lg text-white link-hover"
                    >
                      Klasifikasi
                    </Link>
                  </li>
                </HoverLink>
                <HoverLink>
                  <li className="mx-8">
                    <Link
                      href="#riwayat-klasifikasi"
                      className="font-semibold text-lg text-white link-hover"
                    >
                      Riwayat Klasifikasi
                    </Link>
                  </li>
                </HoverLink>
                <HoverLink>
                  <li className="ms-8 mr-3">
                    <Link
                      href={"/register"}
                      className="font-semibold text-lg text-white link-hover"
                    >
                      Daftar
                    </Link>
                  </li>
                </HoverLink>
              </ul>
            </div>
            <div className="lg:hidden">
              <button onClick={toggleNavbar}>
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
            <div className="hidden lg:flex" />
          </div>
        </div>
      </nav>
      {isOpen && (
        <div>
          <ul className="">
            <li className="flex justify-center items-center my-8">
              <Link
                href="/"
                className="font-semibold text-white link-hover text-lg"
              >
                Home
              </Link>
            </li>
            <li className="flex justify-center items-center my-8">
              <Link
                href={"/"}
                className="font-semibold text-white link-hover text-center text-lg"
              >
                Klasifikasi
              </Link>
            </li>
            <li className="flex justify-center items-center my-8">
              <Link
                href={"/"}
                className="font-semibold text-white link-hover text-center text-lg"
              >
                Riwayat Klasifikasi
              </Link>
            </li>
            <li className="flex justify-center items-center my-8">
              <Link href={"/register"}
                className="font-semibold text-white link-hover text-center text-lg"
              >
                Daftar
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar_Login