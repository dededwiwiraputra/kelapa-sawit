
"use client";

import React from 'react'
import Image from "next/image";
import PageWrapper from "../../../components/pageWrapper";
import Navbar_Dashboard from '../../../components/dashboard/navbar_dashboard';

const page = () => {
  return (
    <div className="">
        <Navbar_Dashboard/>
        <PageWrapper>
            <div className="bg-tcp1" id='klasifikasi'>
                <div className='container mx-auto py-[100px]'>
                    <div className="px-10 md:px-0">
                        <div className="mb-[25px]">
                            <p className="text-center text-4xl font-semibold text-primary">
                                Deteksi
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                        <Image
                            src="/InputImage.png"
                            alt=''
                            width={450}
                            height={20}
                            className=''
                        />
                        </div>
                        <div className="flex items-center justify-center mt-4">
                            <button
                                type="button"
                                onClick=""
                                className="active-button font-bold text-lg text-primary py-2 px-4 rounded-full"
                            >
                                Mulai Deteksi
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>

    </div>
  )
}

export default page