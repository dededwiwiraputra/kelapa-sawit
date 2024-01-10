
"use client";

import React from 'react'
import Image from "next/image";

import Navbar_Dashboard from '../../../components/dashboard/navbar_dashboard'
import PageWrapper from '../../../components/pageWrapper'


const page = () => {
  return (
    <>
      <Navbar_Dashboard/>
      
      

      {/*Table Section*/}
      <PageWrapper>
        <div className="md:px-0 px-10" id="riwayat-klasifikasi">
          <div className="container mx-auto py-[100px]">
            <div className="flex flex-col mb-[30px]">
              <p className="text-center text-4xl font-semibold text-primary">
                Hasil Klasifikasi
              </p>
            </div>
            <div className='flex justify-center'>
            <PageWrapper>
                <Image
                  src="/example_1.jpg"
                  alt=""
                  className=""
                  width={450}
                  height={250}
                />
              </PageWrapper>
            </div>
            <div className="">
              <div className="flex flex-col justify-center">
                <PageWrapper>
                  <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                          <table class="min-w-full text-center text-sm font-light">
                            <thead class="border-b font-medium dark:border-neutral-500">
                              <tr className="">
                                <th
                                  scope="col"
                                  className="px-6 py-4 text-primary border-b border-primary text-xl"
                                >
                                  Area
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-4 text-primary border-b border-primary text-xl"
                                >
                                  Hasil
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="">
                                <td class="whitespace-nowrap px-6 py-4 border-b border-primary text-primary text-lg font-semibold">
                                  Cropping Image / Tree 1
                                </td>
                                <td class="whitespace-nowrap px-6 py-4 border-b border-primary text-primary text-lg font-semibold">
                                  Hasil
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </PageWrapper>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>

    </>
  )
}

export default page