"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar_Dashboard = () => {
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
            <div className="md:basis-1/2 place-self-center">
              <Link href="/">
                <p className="text-base md:text-xl font-bold text-white">
                  Sistem Deteksi Hama Ganoderma
                </p>
                <p className="text-white font-semi pl-custom">(SistekHaGano)</p>
              </Link>
            </div>
            <div className="hidden lg:flex basis-1/2 justify-end">
              <ul className="flex items-center text-center">
                <div>
                  <li className="mx-8">
                    <Link
                      href="#Klasifikasi"
                      className="font-bold text-[18px] text-primary py-3 px-20 rounded-[15px] active-button"
                    >
                      Klasifikasi
                    </Link>
                  </li>
                </div>
                <div>
                  <li className="mx-8">
                    <Link
                      href="#klasifikasi"
                      className="font-semibold text-[18px] text-white"
                    >
                      Riwayat Klasifikasi
                    </Link>
                  </li>
                </div>
                <div>
                  <li className="mx-8">
                    <Link
                      href="#PenularanPenyakit"
                      className="font-semibold text-[18px] text-white text-center"
                    >
                      Penularan Penyakit
                    </Link>
                  </li>
                </div>
                <div>
                  <li className="mx-8">
                    <Link
                      href={"/register"}
                      className="font-semibold text-[18px] text-white"
                    >
                      Administrator
                    </Link>
                  </li>
                </div>
                {/* Icon Account disamping kanan Administrator */}
                <div>
                  <li className="mx-8">
                    <Image
                      src="/ic_Account.png"
                      width={25}
                      height={25}
                      className=""
                    />
                  </li>
                </div>
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
                className="font-bold text-[21px] text-primary py-3 px-20 rounded-[15px] active-button"
              >
                Klasifikasi
              </Link>
            </li>
            <li className="flex justify-center items-center my-8">
              <Link
                href={"/"}
                className="font-semibold text-white text-center text-lg"
              >
                Riwayat Klasifikasi
              </Link>
            </li>
            <li className="flex justify-center items-center my-8">
              <Link
                href={"/"}
                className="font-semibold text-white text-center text-lg"
              >
                Penularan Penyakit
              </Link>
            </li>
            <li className="flex justify-center items-center my-8">
              <Link
                href={"/"}
                className="font-semibold text-white text-center text-lg"
              >
                Administrator
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar_Dashboard;
