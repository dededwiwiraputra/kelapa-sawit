"use client";

import React from "react";
import PageWrapper from "../../../components/pageWrapper";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Card_carousel_1 from "../../../components/card_carousel_1";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="">
      <Navbar />

      {/*Section 1*/}
      <PageWrapper>
        <div id="jumbotron">
          <div className="container mx-auto">
            <div className="md:flex md:flex-row md:justify-between px-10 lg:px-0 py-10 md:py-0">
              <div className="basis-1/2 flex flex-col justify-center lg:pe-[150px] mb-10 md:mb-0">
                <PageWrapper>
                  <div>
                    <p className="text-primary font-bold text-4xl">
                      Welcome to Our
                    </p>
                    <p className="text-primary font-bold text-4xl pt-3">
                      Amazing Product
                    </p>
                  </div>
                  <div className="pt-10">
                    <p className="text-primary font-semibold">
                      Discover a world of innovation and excellence with our
                      latest product. We've redefined what's possible, bringing
                      you cutting-edge technology that enhances your life in
                      ways you never thought possible.25
                    </p>
                  </div>
                </PageWrapper>
              </div>
              <div className="basis-1/2">
                <PageWrapper>
                  <Image
                    src="/example_1.jpg"
                    alt=""
                    className="object-cover h-full w-full"
                    width={700}
                    height={500}
                  />
                </PageWrapper>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>

      {/*Section 2*/}
      <PageWrapper>
        <div className="bg-tcp1" id="profil">
          <div className="container mx-auto py-[100px]">
            <div className="px-10 md:px-0">
              <div className="mb-[50px]">
                <p className="text-center text-4xl font-semibold text-primary">
                  Profile
                </p>
              </div>
              <div className="md:flex md:flex-row md:item-center md:justify-between">
                <div className="basis-1/4 md:mb-0 mb-10">
                  <Card_carousel_1 />
                </div>
                <div className="basis-1/4 md:mb-0 mb-10">
                  <Card_carousel_1 />
                </div>
                <div className="basis-1/4 md:mb-0 mb-10">
                  <Card_carousel_1 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>

      {/*Section 3*/}
      <PageWrapper>
        <div className="bg-tcp2" id="klasifikasi">
          <div className="container mx-auto py-[100px]">
            <div className="flex flex-col mb-[50px]">
              <p className="text-center text-4xl font-semibold text-white">
                Klasifikasi
              </p>
            </div>
            <div className="md:flex md:flex-row md:justify-between px-10 md:px-0">
              <div className="basis-1/2 md:pe-10 md:mb-0 mb-10">
                <PageWrapper>
                  <Image
                    src="/example_1.jpg"
                    alt=""
                    className="object-cover h-full w-full"
                    width={700}
                    height={500}
                  />
                </PageWrapper>
              </div>
              <div className="basis-1/2 flex flex-col justify-center md:ps-5 lg:ps-10">
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
                                  className="px-6 py-4 text-white border border-neutral-100 text-xl"
                                >
                                  Kode
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-4 text-white border border-neutral-100 text-xl"
                                >
                                  Keterangan
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="">
                                <td class="whitespace-nowrap px-6 py-4 border border-neutral-100 text-white text-lg">
                                  S0
                                </td>
                                <td class="whitespace-nowrap px-6 py-4 border border-neutral-100 text-white text-lg">
                                  Sehat
                                </td>
                              </tr>
                              <tr class="">
                                <td class="whitespace-nowrap px-6 py-4 border border-neutral-100 text-white text-lg">
                                  S1
                                </td>
                                <td class="whitespace-nowrap px-6 py-4 border border-neutral-100 text-white text-lg">
                                  Ringan
                                </td>
                              </tr>
                              <tr class="">
                                <td class="whitespace-nowrap px-6 py-4 border border-neutral-100 text-white text-lg">
                                  S2
                                </td>
                                <td class="whitespace-nowrap px-6 py-4 border border-neutral-100 text-white text-lg">
                                  Sedang
                                </td>
                              </tr>
                              <tr class="">
                                <td class="whitespace-nowrap px-6 py-4 border border-neutral-100 text-white text-lg">
                                  S3
                                </td>
                                <td class="whitespace-nowrap px-6 py-4 border border-neutral-100 text-white text-lg">
                                  Berat
                                </td>
                              </tr>
                              <tr class="">
                                <td class="whitespace-nowrap px-6 py-4 border border-neutral-100 text-white text-lg">
                                  S4
                                </td>
                                <td class="whitespace-nowrap px-6 py-4 border border-neutral-100 text-white text-lg">
                                  Sangat Berat
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

      {/*Section 4*/}
      <PageWrapper>
        <div className="md:px-0 px-10" id="riwayat-klasifikasi">
          <div className="container mx-auto py-[100px]">
            <div className="flex flex-col mb-[50px]">
              <p className="text-center text-4xl font-semibold text-primary">
                Riwayat Klasifikasi Hama Ganoderma
              </p>
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
                                  Nama File
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
                                  Gambar
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

      <Footer />
    </div>
  );
};

export default LandingPage;
