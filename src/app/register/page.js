"use client";

import PageWrapper from "../../../components/pageWrapper";
import Card_Form from "../../../components/card/card_form";
import Navbar_Register from "../../../components/navbar/navbar_register";
import Image_display from "../../../components/image_display";


const page = () => {
  const handleregis = () => {
    console.log('Register in with:', email, password);
  };

  return (
    <>
      <Navbar_Register/>
      <PageWrapper>
        <div id="jumbotron" className="">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-4"> 
              <div className="col-span-1">
                <div className="min-h-screen flex items-center justify-center">
                  <Card_Form 
                      title="Daftar" 
                      label="Silahkan Daftar Untuk Akses Akun Anda" 
                      href="/login" 
                      hyprlink="Have an Account?" 
                      btnLabel="Daftar"
                      onClick={handleregis} 
                      bntHref="/login"
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
  )
}

export default page;