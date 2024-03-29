"use client";

import React, { useEffect } from "react";
import PageWrapper from "../../../components/pageWrapper";
import Navbar_Dashboard from "../../../components/dashboard/navbar_dashboard";
import DragAndDrop from "../../../components/upload/dragAndDrop";
import { redirect } from "next/navigation";

export default function page() {
  return (
    <div className="">
      <Navbar_Dashboard />
      <PageWrapper>
        <div className="bg-tcp1 h-screen" id="klasifikasi">
          <div className="mx-auto py-[100px]">
            <div className="px-10 md:px-0">
              <div className="mb-[100px] md:mb[50px]">
                <p className="text-center text-4xl font-semibold text-primary">
                  Deteksi
                </p>
              </div>
              <div className="mb-[100px] md:mb[50px]">
                <DragAndDrop />
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}
