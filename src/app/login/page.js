"use client";

import PageWrapper from "../../../components/pageWrapper";
import Card_Form from "../../../components/card/card_form";
import Navbar_Login from "../../../components/navbar/navbar_login";
import Navbar from "../../../components/navbar/navbar";
import Image_display from "../../../components/image_display";

const page = () => {
  
  const handleLogin = () => {
    console.log("Logging in with:", email, password);
  };
  
  return (
    <>
      <Navbar_Login/>
      <PageWrapper>
        <div id="jumbotron" className="">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <div className="min-h-screen flex items-center justify-center">
                  <Card_Form 
                    title="Masuk" 
                    label="Silahkan Masuk Untuk Akses Akun Anda" 
                    href="/register" 
                    hyprlink="Forget Password?" 
                    btnLabel="Masuk"
                    onClick={handleLogin} 
                    bntHref="/deteksi"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="min-h-screen flex items-center justify-center">
                  <PageWrapper>
                    <Image_display/>
                  </PageWrapper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default page;
