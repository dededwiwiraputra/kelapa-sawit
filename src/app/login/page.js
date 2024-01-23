"use client";

import Image from "next/image";
import PageWrapper from "../../../components/pageWrapper";
import Form_Login from "../../../components/login/form_login";
import Navbar_Login from "../../../components/login/navbar_login";

const page = () => {
  return (
    <div className="">
      <Navbar_Login />
      <PageWrapper>
        <div id="jumbotron" className="">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <div className="min-h-screen flex items-center justify-center">
                  <Form_Login />
                </div>
              </div>
              <div className="col-span-1">
                <div className="min-h-screen flex items-center justify-center">
                  <Image
                    src="/example_1.jpg"
                    alt=""
                    className="object-cover h-full w-full"
                    width={700}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default page;
