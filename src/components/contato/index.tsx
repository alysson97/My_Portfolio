"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import facebook from "./../../../public/img/Contato/facebook.png";
import facebookDark from "./../../../public/img/Contato/facebook-dark.png";
import github from "./../../../public/img/Contato/github.png";
import githubDark from "./../../../public/img/Contato/github-dark.png";
import whatsapp from "./../../../public/img/Contato/whatsapp.png";
import whatsappDark from "./../../../public/img/Contato/whatsapp-dark.png";

interface props{
  id: string | undefined;
};

const App = (props: props)=>{
  const {theme} = useTheme();

  return(
  <>
    <section className={theme == "dark" ? "contato-container flex flex-col justify-center items-center my-24" : " flex flex-col justify-center items-center my-24"} id={props.id}>
      <h1 className="text-5xl tracking-wide underline my-24">Contact me</h1>
      <p className="my-24 text-center texto text-xs tracking-wide">Im always open to new challenges and opportunities. If you are interested in collaboration or just want to connect, please feel free to reach out. Thank you for visiting my website, and Im looking forward to connecting with you soon!</p>


      <div className="contato flex flex-col items-start w-full my-24 ">
        
        <div className="email flex my-4 text-sm">
          <Image
            alt="email icon"
            width={40}
            height={40}
            src={theme == "light" ? "/img/Contato/email.png" : "/img/Contato/email-dark.png"}
          />
          <p className="pl-4">alyssonfvictoria@gmail.com</p>
        </div>

        <div className="phone flex my-4 text-sm">
          <Image
            alt="phone icon"
            width={40}
            height={40}
            src={theme == "light" ? "/img/Contato/phone.png" : "/img/Contato/phone-dark.png"}
          />
          <p className="pl-4">+55(99)98118-6725</p>
        </div>

        <div className="redes-sociais  justify-between flex my-4 text-sm ">
          <div className="social-container pr-4">
            <Image
              alt="facebook icon"
              width={40}
              height={40}
              src={theme == "light" ? "/img/Contato/facebook.png" : "/img/Contato/facebook-dark.png"}
            />
          </div> 
          <div className="social-container px-4">
            <Image
              alt="instagram icon"
              width={40}
              height={40}
              src={theme == "light" ? "/img/Contato/instagram.png" : "/img/Contato/instagram-dark.png"}
            />
          </div>        
          <div className="social-container px-4">
            <Image
              alt="linkedin icon"
              width={40}
              height={40}
              src={theme == "light" ? "/img/Contato/linkedin.png" : "/img/Contato/linkedin-dark.png"}
            />
          </div>
          <div className="social-container px-4">
            <Image
              alt="github icon"
              width={40}
              height={40}
              src={theme == "light" ? "/img/Contato/github.png" : "/img/Contato/github-dark.png"}
            />
          </div>          
          <div className="social-container pl-4">
            <Image
              alt="whatsapp icon"
              width={40}
              height={40}
              src={theme == "light" ? "/img/Contato/whatsapp.png" : "/img/Contato/whatsapp-dark.png"}
            />
          </div>          
        </div>
      </div>
          
    </section>
  </>
)
}


export default App;