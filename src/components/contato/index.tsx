"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
/* import facebook from "./../../../public/img/Contato/facebook.png";
import facebookDark from "./../../../public/img/Contato/facebook-dark.png";
import github from "./../../../public/img/Contato/github.png";
import githubDark from "./../../../public/img/Contato/github-dark.png";
import whatsapp from "./../../../public/img/Contato/whatsapp.png";
import whatsappDark from "./../../../public/img/Contato/whatsapp-dark.png"; */

interface props{
  id: string | undefined;
};

const App = (props: props)=>{
  const {theme} = useTheme();

  function naoFuncionando(){
    window.alert("This link doesn't exist yet =(((");
  }

  return(
  <>
    <section className={`${theme == "dark" ? "contato-container" : ""} flex flex-col justify-center items-center mt-24`} id={props.id}>
      <h1 className="text-5xl tracking-wide underline my-24">Contact me</h1>
      <p className="my-24 text-center texto text-xs tracking-wide">Im always open to new challenges and opportunities. If you are interested in collaboration or just want to connect, please feel free to reach out. Thank you for visiting my website, and Im looking forward to connecting with you soon!</p>


      <div className="contato flex flex-col items-start w-full my-24 ">
        
        <div className="email flex my-4 text-sm">
          <button onClick={()=>naoFuncionando()}>
            <Image
              alt="email icon"
              width={40}
              height={40}
              src={theme == "light" ? "/img/Contato/email.png" : "/img/Contato/email-dark.png"}
            />
          </button>
          <p className="pl-4">alyssonfvictoria@gmail.com</p>
        </div>

        <div className="phone flex my-4 text-sm">
          <button onClick={()=>naoFuncionando()}>
            <Image
              alt="phone icon"
              width={40}
              height={40}
              src={theme == "light" ? "/img/Contato/phone.png" : "/img/Contato/phone-dark.png"}
            />
          </button>
          <p className="pl-4">+55 (99)98118-6725</p>
        </div>

        <div className="redes-sociais  justify-between flex my-4 text-sm ">
          <div className="social-container pr-4">
            <button onClick={()=>naoFuncionando()}>
              <Image
                alt="facebook icon"
                width={40}
                height={40}
                src={theme == "light" ? "/img/Contato/facebook.png" : "/img/Contato/facebook-dark.png"}
              />
            </button>
          </div> 
          <div className="social-container px-4">
            <button onClick={()=>naoFuncionando()}>
              <Image
                alt="instagram icon"
                width={40}
                height={40}
                src={theme == "light" ? "/img/Contato/instagram.png" : "/img/Contato/instagram-dark.png"}
              />
            </button>
            
          </div>        
          <div className="social-container px-4">
            <button onClick={()=>naoFuncionando()}>
              <Image
                alt="linkedin icon"
                width={40}
                height={40}
                src={theme == "light" ? "/img/Contato/linkedin.png" : "/img/Contato/linkedin-dark.png"}
              />
            </button>
            
          </div>
          <div className="social-container px-4">
            <button onClick={()=>naoFuncionando()}>
              <Image
                alt="github icon"
                width={40}
                height={40}
                src={theme == "light" ? "/img/Contato/github.png" : "/img/Contato/github-dark.png"}
              />
            </button>
          </div>          
          <div className="social-container pl-4">
            <button onClick={()=>naoFuncionando()}>
              <Image
                alt="whatsapp icon"
                width={40}
                height={40}
                src={theme == "light" ? "/img/Contato/whatsapp.png" : "/img/Contato/whatsapp-dark.png"}
              />
            </button>
          </div>          
        </div>
      </div>
          
    </section>
  </>
)
}


export default App;