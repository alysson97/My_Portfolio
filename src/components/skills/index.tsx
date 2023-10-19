"use client"
import { useTheme } from "next-themes";
import Image from "next/image";
import React, {useState, useEffect} from "react";
import "./index.scss";




const App = ()=>{
  const {theme} = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    console.log("skill icons are mounted too")
  }, []);

  if (!isMounted) {
    return null;
  }
  return(
    <>
    <div className="skills-image flex flex-col p-12">
            <div className="fileira-um flex flex-row justify-center mb-8">
              <Image
              alt=""
              width={45}
              height={25}
              quality={100}
              src={"/img/Assets/TS.png"}
              className="skill-item px-2 mx-4"
              />
              <Image
              alt=""
              width={45}
              height={25}
              quality={100}
              src={"/img/Assets/NodeJS.png"}
              className="skill-item px-2 mx-4"
              />
              <Image
              alt=""
              width={45}
              height={25}
              quality={100}
              src={theme == "light" ? "/img/Assets/NextJs.png" : "/img/Assets/NextJs-dark.png"}
              className="px-2 mx-4 skill-item"
              />
              <Image
              alt=""
              width={45}
              height={25}
              quality={100}
              src={"/img/Assets/MySql.png"}
              className="px-2 mx-4 skill-item"
              />
              <Image
              alt=""
              width={45}
              height={25}
              quality={100}
              src={"/img/Assets/PHP.png"}
              className="px-2 mx-4 skill-item"
              />
              <Image
              alt=""
              width={45}
              height={25}
              quality={100}
              src={"/img/Assets/React.png"}
              className="px-2 mx-4 skill-item"
              />
              <Image
              alt=""
              width={45}
              height={25}
              quality={100}
              src={"/img/Assets/Sass.png"}
              className="px-2 mx-4 skill-item"
              />
              <Image
              alt=""
              width={45}
              height={25}
              quality={100}
              src={"/img/Assets/HTML.png"}
              className="px-2 mx-4 skill-item"
              />
              <Image
              alt=""
              width={45}
              height={25}
              quality={100}
              src={"/img/Assets/CSS.png"}
              className="px-2 mx-4 skill-item"
              />
              <Image
              alt=""
              width={45}
              height={25}
              quality={100}
              src={"/img/Assets/JS.png"}
              className="px-2 mx-4 skill-item"
              />
            </div>

            <div className="fileira-dois  flex flex-row justify-center">
              <Image
              alt=""
              width={45}
              height={25}
              quality={100}
              src={theme == "light" ? "/img/Assets/Express.png" : "/img/Assets/Express-dark.png"}
              className="px-2 mx-4 skill-item"
              />
              <Image
              alt=""
              width={45}
              height={25}
              quality={100}
              src={"/img/Assets/Git.png"}
              className="px-2 mx-4 skill-item"
              />
              <Image
              alt=""
              width={45}
              height={25}
              quality={100}
              src={"/img/Assets/Linux.png"}
              className="px-2 mx-4 skill-item"
              />
              <Image
              alt=""
              width={45}
              height={25}
              quality={100}
              src={"/img/Assets/BootStrap.png"}
              className="px-2 mx-4 skill-item"
              />
              <Image
              alt=""
              width={45}
              height={25}
              quality={100}
              src={"/img/Assets/C.png"}
              className="px-2 mx-4 skill-item"
              />
            </div>
            
          </div>
    </>
  );
}

export default App;