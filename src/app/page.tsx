"use client"
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import retangulo from "./../../public/img/Geometric/retangulo.png";
import perfil from "./../../public/img/Perfil/Aly-perfil.jpg";
import logo from "./../../public/img/Header/Logo-crop.png"
import Services from "@/components/Draggable";
import Toggle from "@/components/ModeToggle";
import Contato from "@/components/contato";
import Skills from "@/components/skills";
import ProjetoLegado from "@/components/projetoLegado";
import siteAline from "./../../public/img/Projetos/aline-home.png";
import gitProjeto from "./../../public/img/Projetos/Github-large.png";




export default function App(){

  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 250;

        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        } else {
          reveal.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', reveal);
    reveal();

    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return(
    <div className="bg-slate-100 dark:bg-black page">
      <header className="fixed w-screen flex items-center justify-between py-4">
        <div className="flex justify-start pl-4  header">
          <Image
          src={logo}
          alt="logo"
          />
        </div>
        <div className="links  flex justify-between service-items  header">
          <Link href={'#sobre'}>Sobre</Link>
          <Link href={'#skills'}>Skills</Link>
          <Link href={'#projetos'}>Portfolio</Link>
          <Link href={'#contato'}>Contato</Link>
        </div>
        <div className="flex toggle justify-end pr-4">
          <Toggle/>
        </div>
      </header>
      <main className="w-full">

        <section className="flex justify-center flex-col px-16 background-image h-screen">
        <div className="flex justify-start pb-4">
          <Image
          src={logo}
          alt="logo"
          className="sm:hidden"
          />
        </div>
          <h1 className="lg:text-6xl md:text-4xl text-3xl mb-4 tracking-wider">Hi! im <span className="aly-vic">Alysson Victoria</span> <br/>Web Developer</h1>
          <p className="max-w-prose">Im Alysson F Victoria, and Im a Frontend Developer with a passion for creating websites that are easy to use and visually appealing. I specialize in web development, particularly in coding with React, Tailwind, NodeJS & PHP. I take great satisfaction in turning ideas into engaging digital experiences, ensuring websites not only look great but also work seamlessly.</p>
        </section>


        <section className="flex  reveal" id="sobre">

          <div className="flex my-24 py-16 foto-container ">
            {/* adcionei flex */}
            <div className="flex w-full relative ">
              <Image
              alt="retangulo"
              src={retangulo}
              className="absolute retangulo"
              />

              <Image
                alt="foto perfil"
                src={perfil}
                className="z-20 relative lg:ml-24 md:ml-20 ml-16 md:pt-14 pt-2 foto-perfil"
                quality={100}
                /* sizes="(max-width: 768px) 100vw" */
              />
            </div>
          </div>
          
          <div className="flex justify-center items-center who-am-i">
            <div className="vl my-40"></div>
            <div className=" texto md:px-8">
              <h1 className="aly-vic lg:text-xl">Who am i?</h1>
              <h1 className="lg:text-xl mb-2">I am Alysson Victoria, a developer</h1>
              <p>My journey began with a background in Civil Engineering, but I ve since transitioned into the digital realm, working as a Freelance Frontend Developer. I find great joy in the creative process of bringing concepts to life through clean code and intuitive designs. My goal is to make the digital world more user-friendly and captivating.</p>
              <button className="botao text-white"><Link download={true} href={'Curriculo/Curriculo.pdf'}>Download CV</Link> </button>
            </div>
            
          </div>
        </section>


        <section className="services reveal" id="skills">

          <h1 className="lg:text-4xl text-2xl tracking-wide my-8 p-8">My services</h1>

          {/*dois erros de hydration aqui*/}
          <Services/>

          <div className="flex flex-row justify-center items-center my-16 arraste-lado">
            <Image
            alt="mouse"
            width={75}
            height={75}
            src={"/img/Assets/mouse-dark.png"}
            />
            <p style={{display:"inline"}}>Arraste para o lado</p>
          </div>
          
        </section>


        <section className="mb-64 skills geometric reveal">
          <h1 className="lg:text-4xl text-2xl tracking-wide my-8 p-8">Skills</h1>
          <Skills/>
          
        </section>


        <section className="projetos reveal" id="projetos">
          <h1 className="lg:text-4xl text-2xl tracking-wide my-24 p-8">Projetos</h1>
          <form className="site-aline-container mx-auto" action="https://github.com/alysson97" target="_blank">

            <button className="git-container">
            <Image
            alt=""
            src={gitProjeto}
            className="git-projeto"
            />
            </button>
          </form>
        </section>
          
        <div className="reveal">
          <Contato id={"contato"}/>
        </div>
        

        

      </main>
      <footer></footer>
    </div>
  )
}